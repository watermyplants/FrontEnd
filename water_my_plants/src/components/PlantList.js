import React, { useState } from "react";
import { connect } from "react-redux";
import { getPlants } from "../actions/actions";
import NewPlant from "./NewPlant";
import Nav from './nav';
import EditPlant from "./EditPlant";

export const PlantList = props => {
  console.log("props in Plantlist", props);
  //************************* Sets up state for PlantList *************************
  const [plants, setPlants] = useState([]);

  //************************* Submits a plant to state *************************
  // const submitMember = member => setMembers([...members, member]);
  const submitPlant = plant => setPlants([...plants, plant]);

  //************************* Logic for updating a new plant *************************
  const update = newPlant =>
    setPlants([
      ...plants.map(plant => {
        if (plant.id === newPlant.id) {
          return newPlant;
        }
        return plant;
      })
    ]);

  return (
    <div className="App">
      <Nav />
      <NewPlant add={submitPlant} />

      {/* MAPS OVER PLANTS AND CREATES A CARD */}
      {plants.map((plant, i) => (
        <EditPlant plant={plant} key={i} update={update} />
      ))}
    </div>
  );
};

// const mapStateToProps = ({ plantData, isFetching, error }) => ({
//     console.log("mapStateToProps", plantData),
//     plantData,
//     isFetching,
//     error
// });
const mapStateToProps = state => {
  console.log("mapStateToProps Plantlist", state);
};

export default connect(
  mapStateToProps,
  { getPlants }
)(PlantList);
