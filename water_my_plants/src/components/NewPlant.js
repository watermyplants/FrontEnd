import React, { useState } from "react";
import styled from "styled-components";

//************************* This file will *create* a new plant *************************
import Weekdays from "./Weekdays.js";
import Interval from "./interval";
import Notifications from "./receieveNotifications.js";

//************************* Form to add a new plant *************************

const NewPlant = props => {
  const [input, setInput] = useState({
    name: "",
    type: "",
    location: "",
    id: null
  });

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
    width: 700px;
    // border: 1px solid red;
    background-color: #e7e7e7;
    margin: 0 auto;
    border-radius: 2px;
    margin-top: 2.4%;
    margin-right: 5%;
    height: 600px;
  `;
  const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2%;
    padding-right: 5%;
    padding-bottom: 5%;
  `;

  const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
    padding-left: 6%;
    padding-top: 5%;
    padding-bottom: 3%;
    color: #198974;
  `;
  const StyledInput = styled.input`
    width: 77%;
    border-radius: 4px;
    height: 20px;
  `;
  const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1%;
    align-items: flex-end;
  `;

  const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7ea897;
  `;
  const StyledAddbtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 30px 10px 30px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  `;

  const StyledCancelbtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 25px 10px 25px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
  `;

  const StyledBtnDiv = styled. div`
   margin-left: 110px;
  `;

  return (
    <StyledContainer>
      <form onSubmit={submitHandler} className="form">
        <StyledH1>Add Plant/Watering Schedule</StyledH1>

        <StyledInputContainer className="input-container">
          {/* Name of plant input */}
          <StyledLIDiv>
            <Styledlabel htmlFor="Name">Name:</Styledlabel>
            <StyledInput
              type="text"
              value={input.name}
              onChange={inputHandler}
              name="name"
            />
          </StyledLIDiv>

          {/* Type of plant input */}
          <StyledLIDiv>
            <Styledlabel htmlFor="Type">Type: </Styledlabel>
            <StyledInput
              type="text"
              value={input.type}
              onChange={inputHandler}
              name="type"
            />
          </StyledLIDiv>

          {/* Location of plant */}
          <StyledLIDiv>
            <Styledlabel htmlFor="Location">Location: </Styledlabel>
            <StyledInput
              type="text"
              value={input.location}
              onChange={inputHandler}
              name="location"
            />
          </StyledLIDiv>
        </StyledInputContainer>
      </form>
      <Weekdays />
      <Interval />
      <Notifications />
      <StyledBtnDiv>
        <StyledCancelbtn>Cancel</StyledCancelbtn>
        <StyledAddbtn>Add</StyledAddbtn>
      </StyledBtnDiv>
    </StyledContainer>
  );
};

export default NewPlant;