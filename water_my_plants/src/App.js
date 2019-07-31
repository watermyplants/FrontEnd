import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Login from "./components/login";
import Register from "./components/register";
import { PrivateRoute } from "./components/PrivateRoute";
import { PlantList } from "./components/PlantList";
import { useToken } from "./hooks/useToken";

function App() {
  const [, , setToken] = useToken("token");
  return (
    <div className="App">
      <h1>Water My Plants</h1>
      {/* <Route exact path="/login" component={Login} /> */}
      <Route
        exact
        path="/login"
        render={props => <Login {...props} setToken={setToken} />}
      />
      <Route path="/register" component={Register} />
      {/* <PrivateRoute exact path="/plantList" component={PlantList} /> */}
      <Route path="/plantlist" component={PlantList} />
    </div>
  );
}

export default App;
