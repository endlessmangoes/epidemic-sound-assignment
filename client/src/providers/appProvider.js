import { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";

const initialAppState = {
    tracks: [],
    currentTrack: undefined
}

export const AppContext = createContext(
    initialAppState
);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};