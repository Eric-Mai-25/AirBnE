import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import HomesIndex from "./components/HomesIndex";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomesIndex />
        </Route>
      </Switch>
    </>
  );
}

export default App;
