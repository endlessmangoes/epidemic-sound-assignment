import AudioPlayer from "./AudioPlayer";
import React, {useContext} from "react";
import styles from "./Audio.module.css";
import {AppContext} from "../../providers/appProvider";

function Audio() {
    const { state } = useContext(AppContext);

    return (
        <div className={styles.audioPlayer}>
            {state.currentTrack && <AudioPlayer track={state.currentTrack} />}
        </div>
    );
}

export default Audio;