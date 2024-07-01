import React from "react";
import SidebarItem from "../sidebar-item/SidebarItem";
import SidebarTrack from "../sidebar-track/SidebarTrack";

function Playlist({ playlist }) {
    return (
        <div>
            <SidebarItem name={playlist.name} hasDelete={true} />
            <div>
                {playlist.tracks.map((track, trackIndex) => (
                    <SidebarTrack
                        key={trackIndex}
                        track={track}
                    />
                ))}
            </div>
        </div>
    );
}

export default Playlist;
