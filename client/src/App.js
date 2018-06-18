import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stories from "./pages/Stories";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Stories} />
        <Route exact path="/stories" component={Stories} />
      </Switch>
    </div>
  </Router>
);

export default App;
