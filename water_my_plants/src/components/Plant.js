import React from "react";

const Plant = props => {
  //   console.log("Plant", props);
  //   console.log("Plant");
  // const { name, type, location, id } = props.plant;
  // console.log(props.plant)

  return (
    <div>
      <hr />
      <h1>{props.name}</h1>
      <h1>{props.type}</h1>
      <h1>{props.location}</h1>
      {/* <h2>Type: { props.plant.type }</h2> */}
      {/* <h2>Location: {props.plant.location}</h2> */}
      {/* <span>Notification:</span> */}
      {/* <span>Latest Activity</span> */}
    </div>
  );
};

export default Plant;
