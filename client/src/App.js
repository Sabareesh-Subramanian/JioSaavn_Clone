import { Route, Switch } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { LoginPage } from "./components/Login";
import { MobileLogin } from "./components/MobileLogin";
import { Homepage } from "./components/Homepage/Homepage";
import { Artists } from "./Artists";
import { History } from "./History";
import { LikedSongs } from "./LikedSongs";
import { YourEpisodes } from "./YourEpisodes";
function App() {
  return (
    <div>
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
