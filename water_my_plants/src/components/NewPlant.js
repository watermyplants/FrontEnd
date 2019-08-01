import React, {useState} from 'react';

//************************* This file will *create* a new plant *************************
import Weekdays from './Weekdays.js'
import Interval from './interval';

//************************* Form to add a new plant *************************

const NewPlant = props => {
    const [input, setInput] = useState({ name: "", type: "", location: "", id: null });

//************************* Form Handlers *************************

const inputHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
};

const submitHandler = event => {
    event.preventDefault();
    props.add({ ...input, id: Math.random() });
    setInput({ name: "", type: "", location: "", id: null });
};

// ************************* Form 

  return (
      <div>
    <form onSubmit={submitHandler} className="form">
        <h1>Add Plant</h1>

        <div className="input-container">
            {/* Name of plant input */}
            <label htmlFor="Name">
            Name:{" "}
            <input type="text" value={ input.name } onChange={ inputHandler } name="name" />
            </label>
            
            {/* Type of plant input */}
            <label htmlFor="Type">
            Type:{" "}
            <input type="text" value={ input.type } onChange={ inputHandler } name="type" />
            </label>

            {/* Location of plant */}
            <label htmlFor="Location">
            Location:{" "}
            <input type="text" value={ input.location } onChange={ inputHandler } name="location" />
            </label>
        </div>
<<<<<<< HEAD
        <Weekdays/>
        <Interval />
        <button>Add Plant</button>
    </form>
    
        </div>
=======
        <button>Add Plant</button>
    </form>
     <Weekdays/>
     <Interval />
     </div>
>>>>>>> 45c1973634031de995ffa210e95b1fb9df8bb74c
  );
};

export default NewPlant;
