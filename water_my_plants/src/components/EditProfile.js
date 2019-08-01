import React, { useState } from "react";


const EditProfile = props => {
    const [formState, setFormState] = useState({ name:'', number: ''});
    const [editing, setEditing] = useState(false);
    
    const handleEdit = e => {
        setEditing(!editing);
    };

    const inputHandler = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log("MAYBE", formState);
    };

    const handleUpdate = e => {
        e.preventDefault();
        // props.update(formState)
        setEditing(false);
        console.log(`CARD ${props.user} Guud`);
    };
    return editing ? (
            <form onSubmit={handleUpdate} className="account-settings">
                <div>
                    <label htmlFor="Username">
                        Username:{" "}
                        <input type="text" value={formState.name} onChange={inputHandler} name="name" />
                    </label>

                    <label htmlFor="Number">
                        Telephone Number:{" "}
                        <input type="tel" value={formState.number} onChange={inputHandler} name="number" />
                    </label>
                </div>
                <button>Update</button>
            </form>
    ) : (
            <div className="updated-user">
                <h1>Account Settings </h1>
                <h4>Username</h4>
                <p>{props.name}</p>
                <h4>Telephone number</h4>
                <p>{props.number}</p>
                <button>Cancel</button>
                <button onClick={handleEdit}>Save</button>
            </div>
    );
};

export default EditProfile;