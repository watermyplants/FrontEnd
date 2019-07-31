import React from "react";
import styled from 'styled-components';
import logo from './photos/logo.png';


const StyledLogo = styled.img`
width: 30px;
height: 30px;
`;

const H3 = styled.h3`
    font-size: 22px;
    font-family: 'Raleway';
    font-weight: bolder;
    color: #78c885;
    margin: 23px 0 23px 0;
`;

const HeaderSignIn = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E0F0E3;
  width: 120%;
`;

const Wat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;


const Header = () => {


  
  return (
    <Wat>
    <HeaderSignIn>
        <StyledLogo src={logo} />
        <H3>Water my Plants</H3>
    </HeaderSignIn>
    </Wat>
  );
}

export default Header;