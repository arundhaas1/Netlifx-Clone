import React from "react";
import "./App.css";
import HomeScreen from "./Components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login'

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
