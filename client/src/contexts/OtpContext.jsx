import { createContext } from "react";
import { useState } from "react";

export const OtpContext = createContext({
  mynumber: "",
  final: "",
  showingProfile: "",
  loggedIn: "",
  setLoggedIn: () => {},
  handleProfile: () => {},
  handleFinal: () => {},
  handleNumber: () => {},
});

export const OtpValidation = ({ children }) => {
  const [mynumber, setNumber] = useState("");
  const [final, setFinal] = useState("");
  const [showingProfile, setShowingProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleFinal = (result) => {
    setFinal(result);
  };
  const handleProfile = (flag) => {
    setShowingProfile(flag);
  };
  const handleLoggedIn = (set) => {
    setLoggedIn(set);
  };
  return (
    <OtpContext.Provider
      value={{
        mynumber,
        final,
        showingProfile,
        loggedIn,
        handleLoggedIn,
        handleFinal,
        handleNumber,
        handleProfile,
      }}
    >
      {children}
    </OtpContext.Provider>
  );
};
