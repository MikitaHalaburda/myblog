import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationMenu from "./resources/containers/NavigationMenu";
import Routes from "./Routes";

const App = () => {
  return (
    <Router>
      <NavigationMenu />
      <Routes />
    </Router>
  );
};

export default App;
