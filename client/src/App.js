import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [song, setSong] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      <Homepage song={song} loadingFlag={isLoading} />
    </div>
  );
}

export default App;
