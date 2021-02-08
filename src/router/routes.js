import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/:id" component={Post} />
      <Route exact path="/" component={Home} />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
