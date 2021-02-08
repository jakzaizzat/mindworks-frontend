import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Post from "../pages/Post";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:id" component={Post} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
