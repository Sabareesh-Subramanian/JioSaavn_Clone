import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
