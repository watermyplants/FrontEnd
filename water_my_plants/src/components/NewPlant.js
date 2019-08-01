import React, {useState} from 'react';
import styled from 'styled-components'

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
const StyledContainer = styled.div`
    width: 24rem;
    background-color: #E7E7E7;
    margin:  0 auto;
`
const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
`

const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
    
`
const StyledInput = styled.input`
    
`
const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
`


  return (
      <StyledContainer>
    <form onSubmit={submitHandler} className="form">
        <StyledH1>Add Plant/Watering Scedule</StyledH1>

        <StyledInputContainer className="input-container">
            {/* Name of plant input */}
            <StyledLIDiv>
            <Styledlabel htmlFor="Name">
            Name:</Styledlabel>
            <StyledInput type="text" value={ input.name } onChange={ inputHandler } name="name" />
            </StyledLIDiv>
            
            {/* Type of plant input */}
            <label htmlFor="Type">
            Type:{" "}
            <StyledInput type="text" value={ input.type } onChange={ inputHandler } name="type" />
            </label>

            {/* Location of plant */}
            <label htmlFor="Location">
            Location:{" "}
            <StyledInput type="text" value={ input.location } onChange={ inputHandler } name="location" />
            </label>
        </StyledInputContainer>
        <button>Add Plant</button>
    </form>
     <Weekdays/>
     <Interval />
     </StyledContainer>)
};

export default NewPlant;
