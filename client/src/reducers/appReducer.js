import { Actions } from "../constants/actions";
import { PLAYLIST_TILE } from "../constants/constants";

function appReducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case Actions.SET_TRACKS:
            let tracks = [];
            if (payload && payload.length > 0) {
                tracks = payload;
            }

            return {
                ...state,
                tracks,
            };
        case Actions.SET_TRACKS_TITLE:
            let tracksTitle = [];
            if (payload && payload.length > 0) {
                tracksTitle = payload;
            }

            return {
                ...state,
                tracksTitle,
            };

        case Actions.SET_ALL_TRACKS:
            let allTracks = [];
            if (payload && payload.length > 0) {
                allTracks = payload;
            }

            return {
                ...state,
                allTracks,
            };

        case Actions.SET_CURRENT_TRACK:
            let track;
            if (payload) {
                track = payload;
            }

            return {
                ...state,
                currentTrack: track
            };

        case Actions.PLAYING_TRACK_ID:
            let trackId;
            if (payload && payload.length > 0) {
                trackId = payload;
            }

            return {
                ...state,
                playingTrackId: trackId
            };

        case Actions.ADD_PLAYLIST:
            return {
                ...state,
                playlists: [...state.playlists, { name: payload, tracks: [] }],
            };
        case Actions.DELETE_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.filter((playlist) => playlist.name !== payload),
            };
        case Actions.ADD_TRACK_TO_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.map((playlist, index) =>
                    index === action.payload.playlistIndex
                        ? { ...playlist, tracks: [...playlist.tracks, payload.track] }
                        : playlist
                ),
            };
        case Actions.DELETE_TRACK_FROM_PLAYLIST:
            let updatedPlaylistTracks = [];
            const playlists = state.playlists.map((playlist) => {
                if (playlist.name === payload.playlistName) {
                    updatedPlaylistTracks = playlist.tracks.filter((track) => track.title !== payload.track.title);
                    return {
                        ...playlist,
                        tracks: updatedPlaylistTracks
                    }
                } else {
                    return playlist;
                }
            }, []);

            const newState = {
                ...state,
                playlists,
            }

            if (`${PLAYLIST_TILE}${payload.playlistName}` === state.tracksTitle) {
                // if tracks view contains the same playlist, update the tracks array to match new playlist tracks
                newState.tracks = updatedPlaylistTracks;
            }

            return newState;

        default:
            return state;
    }
}

export default appReducer;