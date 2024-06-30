import React, {useContext} from "react";
import styles from "./TrackRow.module.css";
import {AppContext} from "../../providers/appProvider";
import { Actions } from "../../constants/actions";
import HandlePlay from "../handle-play/HandlePlay";

function TrackRow({ track }) {
    const { state, dispatch } = useContext(AppContext);
    const handlePlay = (track) => dispatch({
        type: Actions.SET_CURRENT_TRACK,
        payload: track
    });

    return (
    <div className={styles.trackRow}>
      <button className={styles.trackPlay} onClick={() => handlePlay(track)}>
        <HandlePlay isPlaying={track.id === state.currentTrack.id} />
      </button>
      <div className={styles.trackInfo}>
        <div className={styles.trackTitle}>{track.title}</div>
        <div className={styles.trackArtist}>
          {track.main_artists.join(", ")}
        </div>
      </div>
    </div>
  );
}

export default TrackRow;
