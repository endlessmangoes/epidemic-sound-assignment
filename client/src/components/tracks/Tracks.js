import TrackRow from "./TrackRow";
import React, {useContext, useEffect} from "react";
import styles from "./Tracks.module.css";
import { AppContext } from "../../providers/appProvider";
import {PLAYLIST_TILE} from "../../constants/constants";

function Tracks() {
    const { state } = useContext(AppContext);
    const isPlaylist = state.tracksTitle.startsWith(PLAYLIST_TILE);
    const playlistName = isPlaylist ? state.tracksTitle.replace(PLAYLIST_TILE, '') : '';
    return (
        <div>
            <h2>{state.tracksTitle}</h2>
            <div className={styles.tracks}>
                {state.tracks.map((track, ix) => (
                    <TrackRow key={ix} track={track} playlistName={playlistName} />
                ))}
            </div>
        </div>
    )
}

export default Tracks;