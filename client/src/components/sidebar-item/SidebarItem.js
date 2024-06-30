import React, {useContext, useEffect, useState} from "react";
import styles from "./SidebarItem.module.css";
import { AppContext } from "../../providers/appProvider";
import { Actions } from "../../constants/actions";
import { DeleteIcon } from "../icons/DeleteIcon";


function SidebarItem ({ name, hasDelete = false }) {
    const { state, dispatch } = useContext(AppContext);

    const handleClick = () => {
        if (name === 'All tracks') {
            dispatch({ type: Actions.SET_TRACKS, payload: state.allTracks });
            dispatch({ type: Actions.SET_TRACKS_TITLE, payload: 'All Tracks' });
        } else {
            const playlist = state.playlists.find((playlist) => playlist.name === name);
            dispatch({ type: Actions.SET_TRACKS, payload: playlist.tracks });
            dispatch({ type: Actions.SET_TRACKS_TITLE, payload: `Playlist ${playlist.name}` });
        }
    }

    const handleDeletePlaylist = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (name && name.length > 0) {
            dispatch({ type: Actions.DELETE_PLAYLIST, payload: name });
        }
    }

    return (
        <div onClick={handleClick} className={`${styles.sidebarItem}`} >
            <p>{name}</p>
            {hasDelete ?
                <button className={styles.iconButton} title={'Delete Playlist'} onClick={handleDeletePlaylist}>{DeleteIcon}</button> : <></>
            }
        </div>
    )

}

export default SidebarItem;