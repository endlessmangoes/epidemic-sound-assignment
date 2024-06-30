import TrackRow from "./TrackRow";
import React, {useContext, useEffect} from "react";
import styles from "./Tracks.module.css";
import { AppContext } from "../../providers/appProvider";
import { Actions } from "../../constants/actions";

function Tracks() {
    const { state } = useContext(AppContext);
    return (
        <div>
            <h2>{state.tracksTitle}</h2>
            <div className={styles.tracks}>
                {state.tracks.map((track, ix) => (
                    <TrackRow key={ix} track={track} />
                ))}
            </div>
        </div>
    )
}

export default Tracks;