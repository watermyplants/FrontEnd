import React, { useState } from "react";

// "DeletePlant.js" *********************************************************************
// Initial State Passed in: 
//     'plant' (name, type, location, id) | deletePlant (function)
// **************************************************************************************

const DeletePlant = (props) => {
    // console.log(props)
    const [deleting, setDelete] = useState(false);

    const handleDelete = e => {
        e.preventDefault();
        props.deletePlant(props.plant.id);
        setDelete(true);
        console.log("DELETEING: ", props.plant.id, deleting);
    };

    return deleting ? (
        <div className="hidden">
            <h1>Hidden</h1>
        </div>
    ) : (
        <div>
            <form onSubmit={handleDelete}>
                <button>Delete</button>
            </form>
        </div>
    )
};

export default DeletePlant;