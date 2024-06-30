import AudioPlayer from "./AudioPlayer";
import React from "react";
import styles from "./Audio.module.css";

function Audio({ currentTrack }) {
    return (
        <div className={styles.audioPlayer}>
            {currentTrack && <AudioPlayer track={currentTrack} />}
        </div>
    );
}

export default Audio;