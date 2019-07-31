import React, { useState } from "react";
import DeletePlant from "./DeletePlant";

//************************* Edit Plant *************************

const EditPlant = props => {

    //************************* State setup *************************
    const { name, type, location, id } = props.plant;
    const [input, setInput] = useState({ name: name, type: type, location: location, id: id });
    const [editing, setEditing] = useState(false);
    
    //************************* Form Handlers *************************
    const handleEdit = e => {
        setEditing(!editing);
    };

    const inputHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleUpdate = e => {
        e.preventDefault();
        props.update(input);
        setEditing(false);
    };

    //************************* Edit Form *************************
    //Uses turnary opperator to check if edditing is in progress.. returns values once submited
    return editing ? (
        <form onSubmit={handleUpdate} className="new-plant">
        <h1>Edit Plant</h1>
        <div>

            <label htmlFor="Name">
            Name:{" "}
            <input type="text" value={input.name} onChange={inputHandler} name="name" />
            </label>

            <label htmlFor="Type">
            Type:{" "}
            <input type="text" value={input.type} onChange={inputHandler} name="type" />
            </label>

            <label htmlFor="Location">
            Location:{" "}
            <input type="text" value={input.location} onChange={inputHandler} name="location" />
            </label>
            
        </div>
        <button>Update</button>
        </form>
    ) : (
        <div className="new-plant">
        <h3>Name</h3>
        <p>{name}</p>
        <h3>Type</h3>
        <p>{type}</p>
        <h3>Location</h3>
        <p>{location}</p>
        <button onClick={handleEdit}>Edit</button>
        <DeletePlant />
        </div>
    );
};

export default EditPlant;
