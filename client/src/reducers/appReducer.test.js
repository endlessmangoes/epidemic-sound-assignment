import appReducer from '../reducers/appReducer';
import { Actions } from '../constants/actions';

describe('appReducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            tracks: [],
            tracksTitle: [],
            allTracks: [],
            currentTrack: null,
            playingTrackId: null,
            playlists: []
        };
    });

    test('SET_TRACKS action', () => {
        const tracks = [{ title: 'Track 1' }, { title: 'Track 2' }];
        const action = { type: Actions.SET_TRACKS, payload: tracks };
        const newState = appReducer(initialState, action);

        expect(newState.tracks).toEqual(tracks);
    });

    test('SET_TRACKS_TITLE action', () => {
        const tracksTitle = 'Tracks Title';
        const action = { type: Actions.SET_TRACKS_TITLE, payload: tracksTitle };
        const newState = appReducer(initialState, action);

        expect(newState.tracksTitle).toEqual(tracksTitle);
    });

    test('SET_ALL_TRACKS action', () => {
        const allTracks = [{ title: 'Track 1' }, { title: 'Track 2' }];
        const action = { type: Actions.SET_ALL_TRACKS, payload: allTracks };
        const newState = appReducer(initialState, action);

        expect(newState.allTracks).toEqual(allTracks);
    });

    test('SET_CURRENT_TRACK action', () => {
        const track = { title: 'Current Track' };
        const action = { type: Actions.SET_CURRENT_TRACK, payload: track };
        const newState = appReducer(initialState, action);

        expect(newState.currentTrack).toEqual(track);
    });

    test('PLAYING_TRACK_ID action', () => {
        const trackId = '12345';
        const action = { type: Actions.PLAYING_TRACK_ID, payload: trackId };
        const newState = appReducer(initialState, action);

        expect(newState.playingTrackId).toEqual(trackId);
    });

    test('ADD_PLAYLIST action', () => {
        const playlistName = 'My Playlist';
        const action = { type: Actions.ADD_PLAYLIST, payload: playlistName };
        const newState = appReducer(initialState, action);

        expect(newState.playlists).toEqual([{ name: playlistName, tracks: [] }]);
    });

    test('DELETE_PLAYLIST action', () => {
        initialState.playlists = [{ name: 'Playlist 1', tracks: [] }, { name: 'Playlist 2', tracks: [] }];
        const action = { type: Actions.DELETE_PLAYLIST, payload: 'Playlist 1' };
        const newState = appReducer(initialState, action);

        expect(newState.playlists).toEqual([{ name: 'Playlist 2', tracks: [] }]);
    });

    test('ADD_TRACK_TO_PLAYLIST action', () => {
        initialState.playlists = [{ name: 'Playlist 1', tracks: [] }];
        const track = { title: 'Track 1' };
        const action = {
            type: Actions.ADD_TRACK_TO_PLAYLIST,
            payload: { playlistIndex: 0, track }
        };
        const newState = appReducer(initialState, action);

        expect(newState.playlists[0].tracks).toEqual([track]);
    });

    test('DELETE_TRACK_FROM_PLAYLIST action', () => {
        const track = { title: 'Track 1' };
        initialState.playlists = [{ name: 'Playlist 1', tracks: [track, { title: 'Track 2' }] }];
        const action = {
            type: Actions.DELETE_TRACK_FROM_PLAYLIST,
            payload: { playlistName: 'Playlist 1', track }
        };
        const newState = appReducer(initialState, action);

        expect(newState.playlists[0].tracks).toEqual([{ title: 'Track 2' }]);
    });
});
