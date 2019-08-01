import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPlants, postPlants, putPlants } from "../actions/actions";
import NewPlant from "./NewPlant";
import EditPlant from "./EditPlant";
import DeletePlant from "./DeletePlant";
import Plant from "./Plant";

// "PlantList" **************************************************************************
// Initial State Passed in:
//     Empty object
// **************************************************************************************

const PlantList = props => {
  console.log("props in Plantlist", props);
  useEffect(() => {
    props.getPlants(localStorage.getItem("id"));
  }, []);
  const test = { name: "test", type: "test type", location: "test loc" };
  //   useEffect(() => {
  //     props.postPlants(test);
  //   }, []);

  const testPut = { name: "putTest", type: "putTest", location: "putTest" };

  useEffect(() => {
    props.putPlants(testPut, 7);
  }, []);

  //************************* Sets up state for PlantList *************************
  const [plants, setPlants] = useState([]);
  // const [deletePlantState, setDelete] = useState([]);

  // "submitPlant" **************************************************************************************
  // Submits a "new" plant to state.
  // "submitPlant" will get passed into the "NewPlant" component via 'add' in the return statement towards the bottom of this file.
  // Will only get triggered when you click the 'update' button in 'EditPlant.js'
  // ****************************************************************************************************

  const submitPlant = plant => setPlants([...plants, plant]);

  // "update" *******************************************************************************************
  // "update" will map over '...props' to check 'name / type / location / id'
  // if the id's match, the new updated plant will be returned
  // if id's don't match, the original plant will be returned
  // ****************************************************************************************************

  const update = updatePlantInfo =>
    setPlants([
      ...plants.map(plant => {
        if (plant.id === updatePlantInfo.id) {
          console.log("CARD UPDATING....");
          return updatePlantInfo;
        }
        return plant;
      })
    ]);

  const deletePlant = plantInQue =>
    setPlants([
      ...plants.map(plant => {
        if (plant.id === plantInQue.id) {
          return {};
        }
      })
    ]);

  return (
    <div className="App">
      <h1>Test</h1>

      {/* Creates a new plant and submits info, taken from the form, to state (plants) */}
      <NewPlant add={submitPlant} />

      {/* Maps over 'plants' and creates a card via "EditPlant" component with props passed from 'plants' */}
      {plants.map((plant, i) => (
        <div>
          <EditPlant plant={plant} key={i} update={update} />
          <DeletePlant plant={plant} key={props.id} deletePlant={deletePlant} />
        </div>
      ))}
      {props.plantData.map(plant => (
        <Plant
          name={plant.name}
          type={plant.type}
          location={plant.location}
          key={props.id}
        />
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
const mapStateToProps = ({ plantData, isFetching, error }) => ({
  //   console.log("mapStateToProps Plantlist", state);
  plantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { getPlants, postPlants, putPlants }
)(PlantList);
