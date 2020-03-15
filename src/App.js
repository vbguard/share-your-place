import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import pages
import User from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from './places/pages/UserPlaces'
import EditPlace from './places/pages/EditPlace'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/:uid/places" exact>
            <UserPlaces/>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/places/:placeId">
            <EditPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
