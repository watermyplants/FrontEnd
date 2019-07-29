import React from 'react'
import styled from 'styled-components'

const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid grey;
`

function Register() {

    return (<div>
        <form>
            <feildset>
                <StyledInputDiv>
                    <label>Name</label>
                    <StyledInput type='text' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <label>Email Address</label>
                    <StyledInput type='email' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <label>Password</label>
                    <StyledInput type='password' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <label>Confirm Password</label>
                    <StyledInput type='password' ></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <label>Phone number</label>
                    <StyledInput type='phone number' ></StyledInput>
                </StyledInputDiv>
                <button>Sign Up</button>
            </feildset>
        </form>
    </div>)
}

export default Register