import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getPlants,
  postPlants,
  putPlants,
  deletePlants
} from "../actions/actions";
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
    location: ""
  });

  //************************* Form Handlers *************************

  const inputHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    // props.add({ ...input, id: Math.random() });
    props.postPlants({ ...input });
    setInput({ name: "", type: "", location: "" });
    // props.add({ ...input });
  };

  // ************************* Form
  const StyledContainer = styled.div`
    width: 24rem;
    background-color: #e7e7e7;
    margin: 0 auto;
  `;
  const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
  `;
  const StyledInput = styled.input``;
  const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <StyledContainer>
      <form onSubmit={submitHandler} className="form">
        <StyledH1>Add Plant/Watering Scedule</StyledH1>

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
          <label htmlFor="Type">
            Type:{" "}
            <StyledInput
              type="text"
              value={input.type}
              onChange={inputHandler}
              name="type"
            />
          </label>

          {/* Location of plant */}
          <label htmlFor="Location">
            Location:{" "}
            <StyledInput
              type="text"
              value={input.location}
              onChange={inputHandler}
              name="location"
            />
          </label>
        </StyledInputContainer>
        <button>Add Plant</button>
      </form>
      <Weekdays />
      <Interval />
      <Notifications />
    </StyledContainer>
  );
};

const mapStateToProps = ({ plantData, isFetching, error }) => ({
  //   console.log("mapStateToProps Plantlist", state);
  plantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { getPlants, postPlants, putPlants, deletePlants }
)(NewPlant);
