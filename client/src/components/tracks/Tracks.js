import TrackRow from "./TrackRow";
import React from "react";
import styles from "./Tracks.module.css";

function Tracks({ tracks, handlePlay }) {
    return (
        <div className={styles.tracks}>
            {tracks.map((track, ix) => (
                <TrackRow key={ix} track={track} handlePlay={handlePlay} />
            ))}
        </div>
    )
}

export default Tracks;