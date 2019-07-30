import React from "react";
import Login from './components/login';
import { Route } from "react-router-dom";

import "./App.css";
import Register from './components/register'

import { Login } from "./components/login";
import { Register } from "./components/register";
import { PrivateRoute } from "./components/PrivateRoute";
 
function App() {
  return (
    <div className="App"
      <Login />
      <h1>Water My Plants</h1>
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <PrivateRoute exact path="/plantList" component={PlantList} /> */}
    </div>
  );
}

export default App;
