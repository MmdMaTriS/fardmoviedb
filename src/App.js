import { Route, Switch } from "react-router";
import PopularMovie from "./components/MoviesPage/PopMovies/PopularMovie";
import TopMovie from "./components/MoviesPage/TopMovies/TopMovie";
import UpComing from "./components/MoviesPage/UpComing/UpComing";
import Home from "./pages/Home/Home";
import SingleMovie from "./pages/Movie/SingleMovie";

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
      <Route path="/movie/:id">
        <SingleMovie />
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
