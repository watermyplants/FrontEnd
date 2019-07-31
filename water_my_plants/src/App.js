import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { PrivateRoute } from "./components/PrivateRoute";
import { PlantList } from "./components/PlantList";
import {Weekdays} from './components/Weekdays.js'
function App() {
  return (
    <div className="App">
      <h1>Water My Plants</h1>
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <PrivateRoute exact path="/plantList" component={PlantList} /> */}
      <Route exact path="/plantList" component={PlantList} />
    </div>
  );
}
export default App;