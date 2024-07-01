import React, {useContext, useState} from "react";
import { AppContext } from "../../providers/appProvider";
import { Actions } from "../../constants/actions";
import HandlePlay from "../handle-play/HandlePlay";
import { AddIcon } from "../icons/AddIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import styles from "./TrackRow.module.css";

function TrackRow({ track, playlistName = '' }) {
    const { state, dispatch } = useContext(AppContext);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // const [isPlaying, setPlaying] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handlePlay = (track) => dispatch({
        type: Actions.SET_CURRENT_TRACK,
        payload: track
    });

    const handleAddToPlaylist = (playlistIndex) => {
        dispatch({
            type: Actions.ADD_TRACK_TO_PLAYLIST,
            payload: { playlistIndex, track }
        });
        // Hide the dropdown after adding the track
        setDropdownVisible(false);
    };

    const handleDeleteFromPlaylist = (playlistName) => {
        dispatch({
            type: Actions.DELETE_TRACK_FROM_PLAYLIST,
            payload: { playlistName, track }
        });
    }

    const isPlaying = state.playingTrackId && state.playingTrackId === track.id;

    return (
    <div className={styles.trackRow}>
        <button className={styles.trackPlay} onClick={() => handlePlay(track)}>
          <HandlePlay isPlaying={isPlaying} />
        </button>
        <div className={styles.trackInfo}>
            <div className={styles.trackTitle}>{track.title}</div>
            <div className={styles.trackArtist}>
              {track.main_artists.join(", ")}
            </div>
        </div>
        <div className={styles.addToPlaylistRow}>
            {dropdownVisible && (
                <div className={styles.dropdown}>
                    {state.playlists.map((playlist, index) => (
                        <div
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleAddToPlaylist(index)}
                        >
                            {playlist.name}
                        </div>
                    ))}
                </div>
            )}
            {state.playlists.length > 0 ?
                <button
                    className={styles.addToPlaylist}
                    title={'Add to playlist'}
                    onClick={toggleDropdown}
                >
                    {AddIcon}
                </button> : <></>}
            {playlistName.length > 0 ?
                <button
                    className={styles.addToPlaylist}
                    title={'Remove from playlist'}
                    onClick={() => {
                        handleDeleteFromPlaylist(playlistName)
                    }}
                >
                    {DeleteIcon}
                </button> : <></>}
        </div>
    </div>
  );
}

export default TrackRow;
