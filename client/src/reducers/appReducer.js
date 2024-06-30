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

        case Actions.SET_CURRENT_TRACK:
            let track;
            if (payload) {
                track = payload;
            }

            return {
                ...state,
                currentTrack: track
            };

        default:
            return state;
    }
}

export default appReducer;