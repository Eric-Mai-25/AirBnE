import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import HomesIndex from "./components/HomesIndex";
import HomeShow from "./components/HomeShow";
import ReservationCreate from "./components/ReservationCreate";
import ReviewCreate from "./components/ReviewCreate";
import ReservationIndex from "./components/ReservationIndex";

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
          <ReservationCreate />
        </Route>
        <Route exact path="/reviews/:homeId">
          <ReviewCreate/>
        </Route>
        <Route exact path="/reservations/:userId">
          <ReservationIndex/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
