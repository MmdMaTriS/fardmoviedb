import { Route, Switch } from "react-router";
import PopularMovie from "./components/MoviesPage/PopMovies/PopularMovie";
import TopMovie from "./components/MoviesPage/TopMovies/TopMovie";
import UpComing from "./components/MoviesPage/UpComing/UpComing";
import Home from "./pages/Home/Home";
import SingleMovie from "./pages/Movie/SingleMovie";
import PopTV from "./pages/Series/PopTV/PopTV";
import SingleTVShow from "./pages/Series/SingleTVShow/SingleTVShow";
import TopTV from "./pages/Series/TopTV/TopTV";
import UserPanel from "./pages/UserPanel/UserPanel";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie" exact>
        <h2>Enter Valid Link</h2>
      </Route>
      <Route path="/movie/popular">
        <PopularMovie />
      </Route>
      <Route path="/movie/upcoming">
        <UpComing />
      </Route>
      <Route path="/movie/top-rate">
        <TopMovie />
      </Route>
      <Route path="/tv/popular">
        <PopTV />
      </Route>
      <Route path="/tv/top-rate">
        <TopTV />
      </Route>
      <Route path="/user-panel">
        <UserPanel />
      </Route>
      <Route path="/tv/:id">
        <SingleTVShow />
      </Route>
      <Route path="/movie/:id">
        <SingleMovie />
      </Route>
      <Route path="*">
        <h1 style={{ textAlign: "center" }}>404 Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
