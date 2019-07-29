import React from "react";
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 21px;
    font-family: 'Raleway';
    font-weight: bold;
    color: #78c885;
`;

const HeaderSignIn = styled.header`
     background: #E0F0E3;
     margin: 0 280px 0 280px;
     text-align: center;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;


export default function Header() {


  
  return (
    <HeaderSignIn>
        <H3>Water my Plants </H3>
    </HeaderSignIn>
  );
}
