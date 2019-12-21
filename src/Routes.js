import React, { lazy, Suspense } from "react";
import { SwitchWrapper } from "./style";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./resources/containers/Home"));
const Blog = lazy(() => import("./resources/containers/Blog"));
const Contacts = lazy(() => import("./resources/containers/Contacts"));

const RoutesArray = [
  { path: "/", exact: true, component: <Home /> },
  { path: "/blog", component: <Blog /> },
  { path: "/contacts", component: <Contacts /> }
];

const renderRoute = ({ path, component, exact = false }, index) => (
  <Route key={`${path}+${index}`} exact={exact} path={path}>
    {component}
  </Route>
);

const Routes = () => (
  <SwitchWrapper>
    <Suspense fallback={<div>loading...</div>}>
      <Switch>{RoutesArray.map(renderRoute)}</Switch>
    </Suspense>
  </SwitchWrapper>
);

export default Routes;
