import React from "react";
import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 22px;
    font-family: 'Raleway';
    font-weight: bolder;
    color: #78c885;
    width: 24.8rem;
`;

const HeaderSignIn = styled.header`
     background: #E0F0E3;
     text-align: center;
`;

const Wat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default function Header() {


  
  return (
    <Wat>
    <HeaderSignIn>
        <H3>Water my Plants</H3>
    </HeaderSignIn>
    </Wat>
  );
}
