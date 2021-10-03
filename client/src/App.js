import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
// import { SignUp } from "./components/SignUp";
// import { LoginPage } from "./components/Login";
// import { MobileLogin } from "./components/MobileLogin";
import { Homepage } from "./components/Homepage/Homepage";
//import { Route, Switch } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// import { Artists } from "./Artists";
// import { History } from "./History";
// import { LikedSongs } from "./LikedSongs";
// import { YourEpisodes } from "./YourEpisodes";
=======
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
>>>>>>> 2a2b528a4697de01991f92c46e5e40d1cfa31e4f

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
<<<<<<< HEAD
        {/* <Route exact path="/">
          <SignUp />
=======
        <Route exact path="/">
          <Homepage song={song} loadingFlag={isLoading} />
        </Route>
        <Route path="/home">
          <Homepage song={song} loadingFlag={isLoading} />
>>>>>>> 2a2b528a4697de01991f92c46e5e40d1cfa31e4f
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/mobile">
          <MobileLogin />
<<<<<<< HEAD
        </Route> */}
        <Route path="/">
          <Homepage song={song} loadingFlag={isLoading} />
=======
        </Route>
        <Route path="/otp">
          {/* <Otp /> */}
          {user ? <Homepage song={song} loadingFlag={isLoading} /> : <Otp />}
>>>>>>> 2a2b528a4697de01991f92c46e5e40d1cfa31e4f
        </Route>
        {/* <Route path="/history">
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
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
