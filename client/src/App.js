import "./App.css";
import { Homepage } from "./components/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";
//import Search from "./components/SearchEngine/Search";
import Player from "./components/Homepage/Player";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
