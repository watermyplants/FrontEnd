import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { postLogin } from "../actions/actions";
import Header from "./header";
import styled from "styled-components";

const LoginCard = styled.div`
  background: white;
  border-radius: 3px;
  width: 21rem;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px 0 30px;
  margin: 0 auto;
  color: rgb(145, 143, 143);
  font-weight: bold;
`;

const H1SignIn = styled.div`
  color: rgb(11, 139, 139);
  font-size: 1.2rem;
  font-weight: bolder;
  font-family: "Raleway";
  margin-top: 20px;
`;

const EmailAndPassword = styled.div`
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledSignInButton = styled.button`
  width: 65%;
  font-family: "Raleway";
  color: lightgrey;
  border-radius: 3px;
  font-size: 1rem;
  background: rgb(180, 180, 180);
  padding: 8px 0 8px 0;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const BottomSignIn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const SignUp = styled.h5`
  cursor: pointer;
  color: rgb(56, 55, 55);
  margin: 0 0 0 5px;
`;

const Forgot = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;

const StyledHr = styled.hr`
  width: 95%;
  color: rgb(211, 210, 210);
`;

const Need = styled.p`
  font-size: 14px;
  margin: 0 0 0 0;
`;

const Login = props => {
  const [signIn, setSignIn] = useState({
    // email: "",
    username: "",
    password: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("sign in in handle", signIn);
    // setSignIn(signIn);
    props.postLogin(signIn).then(() => props.history.push("/plantlist"));
  }

  function changeHandler(event) {
    // console.log(signIn);
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  }

  return (
    <LoginCard>
      <Header />
      <form onSubmit={submitHandler}>
        <H1SignIn>Sign in</H1SignIn>
        <br />
        <EmailAndPassword>
          <label>
            Email Address
            <br />
            <StyledInput
              type="text"
              name="username"
              value={signIn.email}
              placeholder=""
              onChange={changeHandler}
            />
            <StyledHr />
          </label>
        </EmailAndPassword>
        <EmailAndPassword>
          <label>
            Password
            <br />
            <StyledInput
              type="password"
              name="password"
              value={signIn.password}
              placeholder=""
              onChange={changeHandler}
            />
            <StyledHr />
          </label>
          <Forgot>Forgot your password?</Forgot>
          <br />
        </EmailAndPassword>
        <StyledSignInButton type="submit">Sign In</StyledSignInButton>
      </form>
      <BottomSignIn>
        <Need>Need an account?</Need>
        <Link to='/register'><SignUp>Sign up</SignUp></Link>
      </BottomSignIn>
    </LoginCard>
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
  { postLogin }
)(Login);

// const mapStateToProps = ({ plantData, isFetching, error }) => ({
//     // console.log("mapStateToProps", plantData),
//     plantData,
//     isFetching,
//     error
// });

// export default connect(
//     mapStateToProps,
//     { getPlants }
// )(PlantList);

// const mapStateToProps = ({ weekday, isFetching, error }) => ({
//     // console.log("mapStateToProps", plantData),
//     plantData,
//     isFetching,
//     error
// });

// export default connect(
//     mapStateToProps,
//     { postWeekday}
// )(Weekdays);

// localStorage.setItem("id", res.data.id) //set to storage
// JSON.parse(localStorage.setItem("id", res.data.id)) //get token from storage
