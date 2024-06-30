import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.svg";

import Playlists from "./components/playlists/Playlists";
import Tracks from "./components/tracks/Tracks";
import Audio from "./components/audio/Audio";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();

  useEffect(() => {
    fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log('debug: data >', data);
        setTracks(data)
      });
  }, []);

  const handlePlay = (track) => setCurrentTrack(track);

  return (
    <main className={styles.app}>
      <nav>
        <img src={logo} className={styles.logo} alt="Logo" />
      </nav>
      <Playlists />
      <Tracks tracks={tracks} handlePlay={handlePlay} />
      <Audio currentTrack={currentTrack} />
    </main>
  );
}

export default App;
