import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import HomesIndex from "./components/HomesIndex";
import HomeShow from "./components/HomeShow";
import ReservationShow from "./components/ReservationShow";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomesIndex />
        </Route>
        <Route exact path="/homes/:homeId">
          <HomeShow />
        </Route>
        <Route exact path="/stays/:homeId">
          <ReservationShow />
        </Route>
      </Switch>
    </>
  );
}

export default App;
