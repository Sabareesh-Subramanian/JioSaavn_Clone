import { createContext } from "react";
import { useState } from "react";

export const OtpContext = createContext({
  mynumber: "",
  final: "",
  handleFinal: () => {},
  handleNumber: () => {},
});

export const OtpValidation = ({ children }) => {
  const [mynumber, setNumber] = useState("");
  const [final, setFinal] = useState("");
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleFinal = (result) => {
    setFinal(result);
  };
  return (
    <OtpContext.Provider value={{ mynumber, final, handleFinal, handleNumber }}>
      {children}
    </OtpContext.Provider>
  );
};
