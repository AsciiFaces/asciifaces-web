import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Main/Main";
import NotFound from "../components/NotFound/NotFound";
import Navigation from "../components/Navigation/Navigation";
import Title from "../components/Title/Title";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="bg-violet min-h-screen h-full flex flex-col pt-14">
        <Title />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/face" component={MainPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
