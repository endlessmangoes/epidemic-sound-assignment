import TrackRow from "./TrackRow";
import React, {useContext, useEffect} from "react";
import styles from "./Tracks.module.css";
import { AppContext } from "../../providers/appProvider";
import { Actions } from "../../constants/actions";

function Tracks() {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                console.log('debug: data >', data);
                dispatch({type: Actions.SET_TRACKS, payload: data});
            });
    }, []);

    console.log('debug > state > tracks ', state);
    return (
        <div className={styles.tracks}>
            {state.tracks.map((track, ix) => (
                <TrackRow key={ix} track={track} />
            ))}
        </div>
    )
}

export default Tracks;