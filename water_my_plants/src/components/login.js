import React, { useState } from "react";

export default function Login() {
  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("sign in", signIn);
    setSignIn(signIn);
  }

  function changeHandler(event) {
    console.log(signIn);
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  }

  return (
    <div className="login-card">
      <div className="sign-in">
        <form onSubmit={submitHandler}>
          <legend className="sign-in-header">Sign in</legend>
          <br />
          <div className="name">
            <label>
              Email Address
              <br />
              <input
                className="email-input"
                type="text"
                name="email"
                value={signIn.email}
                placeholder=""
                onChange={changeHandler}
              />
              <hr />
            </label>
          </div>
          <div className="password">
            <label>
              Password
              <br />
              <input
                className="password-input"
                type="password"
                name="password"
                value={signIn.password}
                placeholder=""
                onChange={changeHandler}
              />
              <hr />
            </label>
            <p className="forgot">Forgot your password?</p>
            <br />
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
        <div className="bottom-signin">
          <p className="need">Need an account?</p>
          <h5 className="sign-up-btn">Sign up</h5>
        </div>
      </div>
    </div>
  );
}
