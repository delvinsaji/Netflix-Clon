import "./App.css";
import { useState } from "react";
import Frontpage from "./Pages/Front Page/frontpage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Mainpage from "./Pages/Main Page/mainpage";
import Moviepage from "./Pages/Movie Page/moviepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Watchlist from "./Pages/Watchlist/Watchlist";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/">
          <Frontpage></Frontpage>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/mainpage">
          <Mainpage></Mainpage>
        </Route>
        <Route path="/moviepage">
          <Moviepage></Moviepage>
        </Route>
        <Route path="/watchlist">
          <Watchlist></Watchlist>
        </Route>
      </Router>
    </div>
  );
}

export default App;

// API key 0877934c418946c2f31a6d22c8ec4bff
