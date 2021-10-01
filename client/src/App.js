import { Route, Switch } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { LoginPage } from "./components/Login";
import { MobileLogin } from "./components/MobileLogin";

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
      </Switch>
    </div>
  );
}

export default App;
