import { Route, Switch } from "react-router-dom";
import { SignUp } from "./components/Signup/SignUp";
import { LoginPage } from "./components/Login/Login";
import { MobileLogin } from "./components/Login/MobileLogin";
import { Homepage } from "./components/Homepage/Homepage";
import { Otp } from "./components/Login/OtpPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Artists } from "./components/SongInfo/Artists";
import { History } from "./components/SongInfo/History";
import { LikedSongs } from "./components/SongInfo/LikedSongs";
import { YourEpisodes } from "./components/SongInfo/YourEpisodes";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [song, setSong] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const NewSong = async () => {
    setIsLoading(true);
    let res = await axios.get(
      "https://apg-saavn-api.herokuapp.com/result/?q=thanimaye/"
    );
    setSong([...song, ...res.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    NewSong();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage song={song} loadingFlag={isLoading} />
        </Route>
        <Route path="/home">
          <Homepage song={song} loadingFlag={isLoading} />
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
        <Route path="/otp">
          {/* <Otp /> */}
          {user ? <Homepage song={song} loadingFlag={isLoading} /> : <Otp />}
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
