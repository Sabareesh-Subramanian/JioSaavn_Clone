import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext({
  playingSong: {},
  SetNewSong: () => {},
});

export const SongContextProvider = ({ children }) => {
  const [playingSong, setPlayingSong] = useState({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe9JQ56xzr8HlpDnWufzRFI3RUtXoMCAvwQ&usqp=CAU",
    album: "",
    song: "",
    media_url: "",
  });

  const SetNewSong = (selected) => {
    setPlayingSong(selected);
  };
  return (
    <SongContext.Provider
      value={{
        playingSong,
        SetNewSong,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
