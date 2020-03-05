import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import {StyledApp} from "./styles";
import UserOnboarding from "./components/UserOnboarding"
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import PrivateRoute from "./utils/privateRoute";

function App() {
  return (
    <StyledApp>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={UserOnboarding} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </StyledApp>
  );
}

export default App;
