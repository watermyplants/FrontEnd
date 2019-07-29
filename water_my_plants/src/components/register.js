import React from 'react'
import styled from 'styled-components'


const StyledFieldset =styled.fieldset`
    border: none;
`

const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    width: 18%;
    margin: 0 auto;
    //background-color: #98FB98;
    padding-left: 5%;
    padding-right: 5%;
    font-style: source sans pro;
`
const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid grey;
    margin-bottom: 5%;
    height: 30px;
`

const StyledLabel = styled.label`
    margin-bottom: 1%;
    text-align: left;
`

const StyledButton = styled.button`
    width: 200px;
    height: 30px;
    background-color: #D0D0D0;
    color: #F3F3F3;
    border-radius: 2px;
`

const RegisterFooterDiv = styled.div`

`

function Register() {

    return (<div>
        <form>
            <h2>Sign up</h2>
            <StyledFieldset>
                <StyledInputDiv>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput type='text' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel>Email Address</StyledLabel>
                    <StyledInput type='email' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel>Password</StyledLabel>
                    <StyledInput type='password' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel>Confirm Password</StyledLabel>
                    <StyledInput type='password' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel>Phone number</StyledLabel>
                    <StyledInput type='phone number' ></StyledInput>
                </StyledInputDiv>
                <StyledButton>Sign Up</StyledButton>

                <RegisterFooterDiv>
        <input type='checkbox'>I accept terms of service available here</input>
        </RegisterFooterDiv> 
            </StyledFieldset>

           
        </form>
        
    </div>)
}

export default Register