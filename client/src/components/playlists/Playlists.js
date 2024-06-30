import React, {useContext, useEffect, useState} from "react";
import Playlist from "./Playlist";
import {AddIcon} from "../icons/AddIcon";
import styles from "./Playlists.module.css";
import {Actions} from "../../constants/actions";
import {AppContext} from "../../providers/appProvider";
import SidebarItem from "../sidebar-item/SidebarItem";
import {ALL_TRACKS_TITLE} from "../../constants/constants";

function Playlists() {
    const [newPlaylistName, setNewPlaylistName] = useState('');
    const { state, dispatch } = useContext(AppContext);

    const addPlaylist = () => {
        if (newPlaylistName && newPlaylistName.length > 0) {
            dispatch({ type: Actions.ADD_PLAYLIST, payload: newPlaylistName });
            setNewPlaylistName('');
        }
    };

    useEffect(() => {
        fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
            .then((res) => res.json())
            .then((data) => {
                dispatch({type: Actions.SET_TRACKS, payload: data});
                dispatch({type: Actions.SET_TRACKS_TITLE, payload: 'All Tracks'});
                dispatch({type: Actions.SET_ALL_TRACKS, payload: data});
            });
    }, []);

    const addNewPlaylistDisabled = newPlaylistName.trim().length === 0;

    return (
        <div>
            <h2>Library</h2>
            <SidebarItem item={state.allTracks} name={ALL_TRACKS_TITLE} />

            <h2>Playlists</h2>
            <div className={styles.playlistForm}>
                <input
                    type="text"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="New playlist name"
                />
                {newPlaylistName && newPlaylistName.length > 0 ? <button
                    className={styles.addButton}
                    disabled={addNewPlaylistDisabled}
                    title={addNewPlaylistDisabled ? 'Disabled' : 'Add new playlist'}
                    onClick={addPlaylist}
                >
                    {AddIcon}
                </button> : <></>}
            </div>
            <div>
                {state.playlists.map((playlist, index) => (
                    <Playlist
                        key={index}
                        index={index}
                        playlist={playlist}
                    />
                ))}
            </div>
        </div>
    );
}

export default Playlists;