import styles from "../tracks/TrackRow.module.css";
import React from "react";

function SidebarTrack ({ track }) {
    return (
        <div className={styles.sideBarTrack}>
            <div className={styles.trackTitle}>{track.title}</div>
            <div className={styles.trackArtist}>
                {track.main_artists.join(", ")}
            </div>
        </div>
    )
}

export default SidebarTrack;