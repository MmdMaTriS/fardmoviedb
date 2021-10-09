import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
