import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";

import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border-radius: 4px;
  width: 26%;
  margin: 0 auto;
`;
const StyledH2 = styled.h2`
    color: #198974
    font-size: 18px;
`;

const StyledP = styled.p`
  font-size: 12px;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 13%;
  padding-right: 5%;
  font-style: source sans pro;
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 5%;
  height: 30px;
  width: 88%;
`;

const StyledLabel = styled.label`
  margin-bottom: 1%;
  text-align: left;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: #d0d0d0;
  color: #f3f3f3;
  border-radius: 2px;
  margin-bottom: 2%;
  font-size: 15px;
`;

const RegisterFooterDiv = styled.div`
    border-top: 1px solid #D0D0D0;
    // width: 30%;
    margin: 0 auto;
    margin-top; 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// const styledCheckboxInput = styled.input`
//     // border: 1px solid #78C885;
// `

const Register = props => {
  console.log("props in register", props);
  const [newUser, setNewUser] = useState({
    username: "",
    // email: "",
    password: "",
    // confirmedPassword: "",
    phone: ""
  });

  function handleSubmit(event) {
    console.log("NewUser in handle", newUser);
    event.preventDefault();
    //
    // setNewUser(newUser);
    props.registerUser(newUser).then(() => props.history.push("/login"));
  }

  function handleChange(event) {
    const updatedUser = { ...newUser, [event.target.name]: event.target.value };
    console.log("user", event.target.name, event.target.value, updatedUser);
    setNewUser(updatedUser);
  }

  return (
    <div>
      {/* <form onSubmit={event => handleSubmit(event)}> */}
      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          <StyledH2>Sign up</StyledH2>
          <StyledInputDiv>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              type="text"
              name="username"
              value={newUser.username}
              onChange={handleChange}
            />
          </StyledInputDiv>
          {/* <StyledInputDiv>
            <StyledLabel>Email Address</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
            />
          </StyledInputDiv> */}
          <StyledInputDiv>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
            />
          </StyledInputDiv>
          {/* <StyledInputDiv>
            <StyledLabel>Confirm Password</StyledLabel>
            <StyledInput
              type="password"
              name="confirmedPassword"
              value={newUser.confirmedPassword}
              onChange={handleChange}
            />
          </StyledInputDiv> */}
          <StyledInputDiv>
            <StyledLabel>Phone number</StyledLabel>
            <StyledInput
              type="phone number"
              name="phone"
              value={newUser.phone}
              onChange={handleChange}
            />
          </StyledInputDiv>
          <StyledButton>Sign Up</StyledButton>

          <RegisterFooterDiv>
            <input type="checkbox" />
            <StyledP>I accept terms of service available here.</StyledP>
          </RegisterFooterDiv>
          <div>
            <StyledP>
              Got accout? <span>Sign in</span>
            </StyledP>
          </div>
        </StyledFieldset>
      </form>
    </div>
  );
};

const mapStateToProps = ({ token, loggingIn, error }) => ({
  // console.log("mapStateToProps", token),
  token,
  loggingIn,
  error
});

// const mapStateToProps = state => console.log(state);

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
