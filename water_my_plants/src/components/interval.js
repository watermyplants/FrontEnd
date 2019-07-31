import React, { useState } from "react";
import styled from 'styled-components'

export default function Interval() {
  const [count, setCount] = useState(0);

  const StyledH4 = styled.h4`
  color: teal;
  font-size: 20px;
  `;

  
  const StyledIntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  `;


 
  const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  `;

  const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  `;

  const StyledInput = styled.input`
  width: 8rem;
  padding: 0 0 10px 0;
  margin-left: 5px;
  `;



  function submitHandler(event) {
    event.preventDefault();
    console.log("sign in", count);
    setCount(count);
  }


  const handleIncrement = () =>
      setTimeout(
          () => setCount(currentCount => currentCount + 1), 1000
      );

  const handleDecrement = () =>
    setTimeout(
        () => setCount(currentCount => currentCount - 1), 1000
    );

  const Button = ({handleClick, children }) => (
      <button type='button' onClick={handleClick}>
          {children}
      </button>
  )

  return (
    <StyledIntervalContainer>
        <StyledH4>Interval</StyledH4>
        <StyledDiv>
        <p>Every {count} days</p>
        <Button handleClick={handleIncrement}>+</Button>
        <Button handleClick={handleDecrement}>-</Button>
        </StyledDiv>
      <form onSubmit={submitHandler}>
        <StyledLabel>
          Start Date: 
          <StyledInput
            type="date"
            value={count.date}
            placeholder=""
          />
        </StyledLabel>
      </form>
    </StyledIntervalContainer>

  );
}
