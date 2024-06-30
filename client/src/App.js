import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.svg";

import Playlists from "./components/playlists/Playlists";
import Tracks from "./components/tracks/Tracks";
import Audio from "./components/audio/Audio";
import {AppProvider} from "./providers/appProvider";

function App() {
  return (
      <AppProvider>
        <main className={styles.app}>
          <nav>
            <img src={logo} className={styles.logo} alt="Logo" />
          </nav>
          <Playlists />
          <Tracks />
          <Audio />
        </main>
      </AppProvider>
  );
}

export default App;
