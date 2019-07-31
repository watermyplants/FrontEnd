import React, { useState } from "react";
import styled from 'styled-components';
import img from './testimonial1.jpg';
import logo from './logo.png';


const StyledHolder = styled.div `
display: flex;
background: #E0F0E3;
padding-bottom: 3px;
padding-top: 3px;
`;

const StyledLeft = styled.div `
display: flex;
align-items: center;
font-size: 14px;
font-family: 'Raleway';
font-weight: bolder;
color: #78c885;
width: 93rem;
`;

const StyledRight = styled.div `
display: flex;
padding: 0 0 0 20px;
align-items: center;
`;

const StyledImg = styled.img`
width: 55px;
height: 55px;
`;

const StyledLogo = styled.img`
width: 40px;
height: 40px;
`;

const StyledButton = styled.button`
background:#78c885;
color: white;
font-family: 'Raleway';
font-size: 15px;
padding: 8px 10px 8px 10px;
margin-left: 5px;
margin-right: 5px;
`;

const StyledInput =  styled.input`
 padding-top: 10px;
 padding-bottom: 10px;
`;



const Nav = props => {
  const [navsSearch, setNavsSearch] = useState({
    search: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("navs", setNavsSearch);
    // setSignIn(signIn);
    props.navs(setNavsSearch);
  }

  function changeHandler(event) {
    console.log(navsSearch);
    setNavsSearch({ ...navsSearch, [event.target.name]: event.target.value });
  }
  return (
    <StyledHolder>
     <StyledLeft >
      <StyledLogo src={logo} />
      <h1>Water My Plants</h1>
      </StyledLeft>
      <StyledRight >
      <form onSubmit={submitHandler}>
        <label>
          <StyledInput
            type="search"
            name="search"
            results='0'
            value={navsSearch.search}
            placeholder="Search plant"
            onChange={changeHandler}
          />
        </label>
      </form>
      <StyledButton>Profile</StyledButton>
      <StyledImg src={img} />
      </StyledRight>
    </StyledHolder>
  );
};

export default Nav;