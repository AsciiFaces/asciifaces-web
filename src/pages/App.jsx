import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Main/Main";
import NotFound from "../components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/face" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
