import { Actions } from "../constants/actions";

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

        case Actions.ADD_PLAYLIST:
            return {
                ...state,
                playlists: [...state.playlists, { name: action.payload, tracks: [] }],
            };
        case Actions.DELETE_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.filter((playlist) => playlist.name !== action.payload),
            };
        case Actions.ADD_TRACK_TO_PLAYLIST:
            console.log(' > add to playlist ', payload);
            return {
                ...state,
                playlists: state.playlists.map((playlist, index) =>
                    index === action.payload.playlistIndex
                        ? { ...playlist, tracks: [...playlist.tracks, action.payload.track] }
                        : playlist
                ),
            };
        case Actions.DELETE_TRACK_FROM_PLAYLIST:
            return {
                ...state,
                playlists: state.playlists.map((playlist, playlistIndex) =>
                    playlistIndex === action.payload.playlistIndex
                        ? {
                            ...playlist,
                            tracks: playlist.tracks.filter((_, trackIndex) => trackIndex !== action.payload.trackIndex),
                        }
                        : playlist
                ),
            };

        default:
            return state;
    }
}

export default appReducer;