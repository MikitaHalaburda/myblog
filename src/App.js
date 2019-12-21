import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationMenu from "./resources/containers/NavigationMenu";
import { SwitchWrapper } from "./style";

const Home = lazy(() => import("./resources/containers/Home"));
const Blog = lazy(() => import("./resources/containers/Blog"));
const Contacts = lazy(() => import("./resources/containers/Contacts"));

const Routes = () => (
  <SwitchWrapper>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Suspense>
  </SwitchWrapper>
);

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <Routes />
    </Router>
  );
};

export default App;
