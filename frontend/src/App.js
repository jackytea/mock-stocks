import React from "react";
import { Route, Switch } from "react-router-dom";
import Markets from "./components/Markets/Markets";
import Navigation from './components/Navigation/Navigation';
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' render={() => (<Home />)} />
        <Route exact path='/markets' render={() => (<Markets />)} />
        <Route render={() => (<NotFound />)} />
      </Switch>
    </div>
  );
}

export default App;
