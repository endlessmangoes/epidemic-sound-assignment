# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Design Decisions

Single page app. Sidebar manages playlists (create and delete). Tracks view (list of tracks), displays tracks based on `All Tracks` or relevant playlist. Tracks views allows addition and removal of track to/from playlists.

- Project structure
  - components
    - contains all components, each within its own folder. Each folder contains the component, styles and its tests.
  - providers
  - reducers
    - defines app state change
  - hooks
    - not implemented; but moving the fetch call as a hook would be useful (especially for use in multiple places)
  - constants
    - contains actions for reducer
    - contains mock for tests
    - contains some Strings as constants that are used as Text
  - 
- removing Navigation, and making the app as a single view containing, Playlists, Tracks and the Audio player
  - Combining views,

## Things to change if I had more time

- Adding TypeScript, and building the app with vite (using updated create-react-app)
  - For type-safety. I do remember this being a goal for technologies used within Epidemic, I tried doing this for 1hr on Saturday and failed. Since I only have a day left I'm just focussed on building the core requirements.
- Breaking down the Reducers, to smaller and feature relevant reducers. Currently `appReducer` most of the state of the whole app.
- Setting up an ID for `playlists`. Using that ID to delete instead of using `name` (Similar for tracks). This allows users to have multiple playlists with the same name.
- Creating a simple Button component, that abstracts out the use of Icons, would reduce styles being defined in different components (for respective buttons).
- In retrospect, I created `SidebarTrack`, this component is redundant, a better way would be to improve TrackRow to support both Sidebar and Tracks views.
- The Tracks view explicitly uses title, and tracks (array), to render the view. This can be improved.
- More test cases, I ran out of time, only created test cases for `appReducer` and `TrackRow`
- Improving HandlePlay (component for rendering icon for play). Moving State of Audio Player to the reducer properly. The State for which track is being played is glitchy, this results in the HandlePlay component rendering being buggy (when track is played).  