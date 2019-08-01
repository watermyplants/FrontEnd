import React, { useState } from "react";
import Popup from "reactjs-popup";
import EditProfile from './EditProfile';
import styled from "styled-components";
import img from "./photos/testimonial1.jpg";
import logo from "./photos/logo.png";

const StyledHolder = styled.div`
  display: flex;
  background: #e0f0e3;
  padding-bottom: 3px;
  padding-top: 3px;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Raleway";
  font-weight: bolder;
  color: #78c885;
  width: 89rem;
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 55px;
  height: 55px;
  cursor: pointer;
`;

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledButton = styled.button`
  background: #78c885;
  color: white;
  font-family: "Raleway";
  font-size: 15px;
  padding: 8px 10px 8px 10px;
  margin-left: 5px;
  margin-right: 5px;
`;

const StyledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
`;

const StyledPopUpContainer = styled.div`
  background: #f8f9f9;
`;

const StyledEditBtnContainer = styled.div`
background: #138D75;
padding-top: 10px;
padding-bottom: 10px;
`;

const EditAccount = styled.button`
border: none;
color: white;
background: #138D75;
cursor: pointer;
font-size: 12px;
outline: none;
`;

const Nav = props => {
  const [navsSearch, setNavsSearch] = useState({
    search: ""
  });

  const [ formState, setFormState ] = useState({
      name:'Leah Potter',
      number: '+1 (757) 932-3498'
  })

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
      <StyledLeft>
        <StyledLogo src={logo}  alt='logo'/>
        <h1>Water My Plants</h1>
      </StyledLeft>
      <StyledRight>
        <form onSubmit={submitHandler}>
          <label>
            <StyledInput
              type="search"
              name="search"
              results="0"
              value={navsSearch.search}
              placeholder="Search plant"
              onChange={changeHandler}
            />
          </label>
        </form>
        <StyledButton>Plants</StyledButton>
        <Popup trigger={<StyledImg src={img} alt='user-image'/>} position="bottom right">
          <StyledPopUpContainer>
            <img src={img} alt='user image in popup' />
            <h3>Leah Potter</h3>
            <p>+1 (757) 932-3498</p>
          </StyledPopUpContainer>
          <StyledEditBtnContainer>
            <Popup trigger={<EditAccount>EDIT ACCOUNT DETAILS</EditAccount>} position='left'>
                <EditProfile />
            </Popup>       
         </StyledEditBtnContainer>
        </Popup>
      </StyledRight>
    </StyledHolder>
  );
};

export default Nav;
