import { createContext } from "react";
import { useState } from "react";

export const OtpContext = createContext({
  mynumber: "",
  // final: "",
  loggedIn: "",
  setLoggedIn: () => {},
  handleFinal: () => {},
  handleNumber: () => {},
});

export const OtpValidation = ({ children }) => {
  const [mynumber, setNumber] = useState("");
  // const [final, setFinal] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  // const handleFinal = (result) => {
  //   setFinal(result);
  // };
  const handleLoggedIn = (set) => {
    setLoggedIn(set);
  };
  return (
    <OtpContext.Provider
      value={{
        mynumber,
        // final,
        loggedIn,
        handleLoggedIn,
        // handleFinal,
        handleNumber,
      }}
    >
      {children}
    </OtpContext.Provider>
  );
};
