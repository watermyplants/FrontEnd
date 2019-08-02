import React, {useState} from 'react';
import styled from 'styled-components'

//************************* This file will *create* a new plant *************************
import Weekdays from './Weekdays.js'
import Interval from './interval';
import Notifications from './receieveNotifications.js'

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
    width: 21rem;
    background-color: #E7E7E7;
    margin:  0 auto;
    border-radius: 2px;
`
const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
    padding-right: 5%;
    
`

const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
    padding-left: 6%;
    padding-top: 5%;
    padding-bottom: 3%;
    color: #198974;
`
const StyledInput = styled.input`
    width: 77%;
    border-radius: 4px;
    height: 20px;
    
`
const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-bottom: 1%;
    align-items: flex-end;
`

const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7EA897;
`
const StyledAddbtn= styled.button`
color: white;
background: #78c885;
border: none;
border-radius: 3px;
outline: none;
padding: 10px 20px 10px 20px;
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
cursor:pointer;
`

const StyledCancelbtn= styled.button`
color: white;
background: #78c885;
border: none;
border-radius: 3px;
outline: none;
padding: 10px 20px 10px 20px;
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
cursor:pointer;
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
            <StyledLIDiv>
            <Styledlabel htmlFor="Type">
            Type:{" "}</Styledlabel>
            <StyledInput type="text" value={ input.type } onChange={ inputHandler } name="type" />
            </StyledLIDiv>

            {/* Location of plant */}
            <StyledLIDiv>
            <Styledlabel htmlFor="Location">
            Location:{" "}</Styledlabel>
            <StyledInput type="text" value={ input.location } onChange={ inputHandler } name="location" />
            </StyledLIDiv>
        </StyledInputContainer>
    </form>
     <Weekdays/>
     <Interval />
     <Notifications/>
     <StyledCancelbtn>Cancel</StyledCancelbtn>
     <StyledAddbtn>Add</StyledAddbtn>

     </StyledContainer>)
};

export default NewPlant;
