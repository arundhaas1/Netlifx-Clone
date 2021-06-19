import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./Components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Firebase";
import { useDataLayerValue } from "./DataLayer";
import Profile from "./Components/Profile";

function App() {
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
    // unsubscribe()
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/home">
              <HomeScreen />
            </Route>
          </Switch>
        )}

        <Route className="/profile">
          <Profile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
