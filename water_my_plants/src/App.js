import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Register from "./components/register";
import PlantList from "./components/PlantList";

import { PrivateRoute } from "./components/PrivateRoute";
import { Weekdays } from "./components/Weekdays.js";
import { useToken } from "./hooks/useToken";

function App() {
  const [, , setToken] = useToken("token");
  return (
    <div className="App">
      <Route
        exact
        path="/login"
        render={props => <Login {...props} setToken={setToken} />}
      />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/plantList" component={PlantList} />
    </div>
  );
}
export default App;
