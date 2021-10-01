import { Route, Switch } from "react-router-dom";
import { SignUp } from "./components/Signup/SignUp";
import { LoginPage } from "./components/Login/Login";
import { MobileLogin } from "./components/Login/MobileLogin";
import { Homepage } from "./components/Homepage/Homepage";
import { Otp } from "./components/Login/OtpPage";

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
        <Route path="/otp">
          <Otp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
