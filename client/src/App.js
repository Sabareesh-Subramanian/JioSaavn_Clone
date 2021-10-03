import { Route, Switch } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { LoginPage } from "./components/Login";
import { MobileLogin } from "./components/MobileLogin";
import { Homepage } from "./components/Homepage/Homepage";
import { Artists } from "./components/SongInfo/Artists";
import { History } from "./components/SongInfo/History";
import { LikedSongs } from "./components/SongInfo/LikedSongs";
import { YourEpisodes } from "./components/SongInfo/YourEpisodes";
// import { SongInfo } from "./components/SongInfo/SongInfo";
function App() {
  return (
    <div>
      {/* <SongInfo /> */}
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/mobile">
          <MobileLogin />
        </Route>
        <Route path="/home">
          <Homepage /> 
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/likedsongs">
          <LikedSongs />
        </Route>
        <Route path="/yourepisodes">
          <YourEpisodes />
        </Route>
        <Route path="/artists">
          <Artists />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
