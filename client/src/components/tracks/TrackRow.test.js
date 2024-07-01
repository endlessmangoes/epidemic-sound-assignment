import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrackRow from './TrackRow';
import { AppContext } from '../../providers/appProvider';
import { Actions } from '../../constants/actions';
import {MOCK_TRACK} from "../../constants/mocks";

const mockDispatch = jest.fn();

const renderWithContext = (component, { state }) => {
    return render(
        <AppContext.Provider value={{ state, dispatch: mockDispatch }}>
            {component}
        </AppContext.Provider>
    );
};

describe('TrackRow Component', () => {
    const initialState = {
        playingTrackId: null,
        playlists: [
            { name: 'Playlist 1', tracks: [] },
            { name: 'Playlist 2', tracks: [] }
        ]
    };

    beforeEach(() => {
        mockDispatch.mockClear();
    });

    test('renders track information', () => {
        renderWithContext(<TrackRow track={MOCK_TRACK} />, { state: initialState });

        expect(screen.getByText(MOCK_TRACK.title)).toBeInTheDocument();
        expect(screen.getByText(MOCK_TRACK.main_artists[0])).toBeInTheDocument();
    });

    test('plays track on play button click', () => {
        // test play
    });

    test('toggles dropdown visibility on add to playlist button click', () => {
        renderWithContext(<TrackRow track={MOCK_TRACK} />, { state: initialState });

        const addButton = screen.getByTitle('Add to playlist');
        fireEvent.click(addButton);

        expect(screen.getByText('Playlist 1')).toBeInTheDocument();
        expect(screen.getByText('Playlist 2')).toBeInTheDocument();

        fireEvent.click(addButton);
        expect(screen.queryByText('Playlist 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Playlist 2')).not.toBeInTheDocument();
    });

    test('adds track to playlist on playlist item click', () => {
        renderWithContext(<TrackRow track={MOCK_TRACK} />, { state: initialState });

        const addButton = screen.getByTitle('Add to playlist');
        fireEvent.click(addButton);

        const playlistItem = screen.getByText('Playlist 1');
        fireEvent.click(playlistItem);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: Actions.ADD_TRACK_TO_PLAYLIST,
            payload: { playlistIndex: 0, track: MOCK_TRACK }
        });
        expect(screen.queryByText('Playlist 1')).not.toBeInTheDocument();
    });

    test('removes track from playlist on delete button click', () => {
        renderWithContext(<TrackRow track={MOCK_TRACK} playlistName="Playlist 1" />, { state: initialState });

        const deleteButton = screen.getByTitle('Remove from playlist');
        fireEvent.click(deleteButton);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: Actions.DELETE_TRACK_FROM_PLAYLIST,
            payload: { playlistName: 'Playlist 1', track: MOCK_TRACK }
        });
    });

    test('displays playing icon when track is playing', () => {
        // test icon change on play
    });
});
