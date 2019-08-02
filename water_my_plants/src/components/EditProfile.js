import React, { useState, useEffect } from "react";
import EditIcon from "./photos/edit-icon.png";
import styled from "styled-components";

const EditProfile = props => {
  const [nameState, setNameState] = useState("Leah_Potter"); 
  const [numberState, setNumberState] = useState( '+1 (757) 932-3498'); 

  const [editing, setEditing] = useState(false);
  console.log('this',props)
  props.setName(nameState)
  props.setNumber(numberState)


  const StyledFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `;

  const StyledContainer = styled.div`
    width: 100%;
  `;
  const StyledTop = styled.div`
    background-image: linear-gradient(
      to bottom right,
      #6bee80,
      #78c885,
      #198974
    );
  `;
  const StyledBottom = styled.div`
    background-image: linear-gradient(to bottom right, #78c885, #198974);
    margin-top: 20px;
  `;
  const StyledMiddle = styled.div`
    background: white;
  `;

  const StyledImg = styled.img`
    width: 30px;
    height: 30px;
  `;

  const StyledBtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 5px 10px 5px 10px;
    margin-left: 6px;
  `;

  const StyledH3 = styled.h3`
    margin: 0 auto;
    text-align: left;
    color: gray;
  `;
  const StyledP = styled.p`
    text-align: left;
    color: dark grey;
    margin: 0 auto;
  `;

  const handleEdit = e => {
    setEditing(!editing);
  };

  const inputHandler = e => {
    setNameState( e.target.value );
    console.log("MAYBE", nameState);
  };

  const inputNumberHandler = e => {
    setNumberState( e.target.value );
    console.log("MAYBE", nameState);
  };
  
    const handleUpdate = e => {
      e.preventDefault();
      setNameState(nameState);
      setEditing(false);
      console.log(`CARD ${nameState} Guud`);
    };

  return editing ? (
    <form onSubmit={handleUpdate} className="account-settings">
      <div>
        <label htmlFor="name">
          Username:{" "}
          <input
            type="text"
            value={nameState}
            onChange={inputHandler}
            name="name"
          />
        </label>

        <label htmlFor="number">
          Telephone Number:{" "}
          <input
            type="tel"
            value={numberState}
            onChange={inputNumberHandler}
            name="number"
            placeholder=""
          />
        </label>
      </div>
      <StyledBtn>Update</StyledBtn>
    </form>
  ) : (
    <StyledContainer>
      <StyledTop>
        <StyledH3>Account Settings </StyledH3>
      </StyledTop>
      <StyledMiddle>
        <h4 className="popupusernamepw">Username</h4>
        <StyledFlex>
          <StyledImg src={EditIcon} alt="edit icon" />
          <StyledP>{nameState}</StyledP>
        </StyledFlex>
        <h4 className="popupusernamepw">Telephone number</h4>
        <StyledFlex>
          <StyledImg src={EditIcon} alt="edit icon" />
          <StyledP>{numberState}</StyledP>
        </StyledFlex>
      </StyledMiddle>
      <StyledBottom>
        <StyledBtn>Cancel</StyledBtn>
        <StyledBtn onClick={handleEdit}>Edit</StyledBtn>
      </StyledBottom>
    </StyledContainer>
  );
};

export default EditProfile;
