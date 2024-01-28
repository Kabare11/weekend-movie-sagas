import { HashRouter as Router, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import "./App.css";
import MovieDetail from "../MovieDetail/MovieDetail";

// react router dom added for home page and details page

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <MovieList />
      </Route>
      {/* Details page */}

      <Route path={"/details/:id"}>
        <MovieDetail />
      </Route>
      {/* Add Movie page */}
    </Router>
  );
}

export default App;
