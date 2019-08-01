import React, { useState } from "react";
import EditIcon from "./photos/edit-icon.png";
import styled from 'styled-components';



const EditProfile = props => {
  const [formState, setFormState] = useState({ name: "", number: "" });
  const [editing, setEditing] = useState(false);

 const StyledFlex = styled.div`
 display: flex;
 justify-content:space-evenly;
 align-items:center;
`;

const StyledContainer = styled.div`
width: 100%;

`;
const StyledTop = styled.div`
background-image: linear-gradient(to bottom right, #6bee80, #78c885, #198974);

`;
const StyledBottom = styled.div`
background-image: linear-gradient(to bottom right, #78c885, #198974);
margin-top: 20px;
`;
const StyledMiddle= styled.div`
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
border-radius: 5px;
outline: none;
padding: 5px 10px 5px 10px;
margin-left: 6px;
`;

const StyledH3 = styled.h3`
margin: 0 auto;
text-align: left;
color: grey;
`;
const StyledP = styled.p`
text-align: left;
color: dark grey;
margin: 0 auto;
`;

const StyledInput = styled.input`
border-radius: 4px;
`;

const StyledLabel = styled.label`
text-align: left;
`;

  const handleEdit = e => {
    setEditing(!editing);
  };

  const inputHandler = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log("MAYBE", formState);
  };

  const handleUpdate = e => {
    e.preventDefault();
    setEditing(false);
    console.log(`CARD ${formState.name} Guud`);
  };
  return editing ? (
    <form onSubmit={handleUpdate} className="account-settings">
      <div>
        <StyledLabel htmlFor="name">
          Username:{" "}
          <StyledInput
            type="text"
            value={formState.name}
            onChange={inputHandler}
            name="name"
          />
        </StyledLabel>

        <StyledLabel htmlFor="number">
          Telephone Number:{" "}
          <StyledInput
            type="tel"
            value={formState.number}
            onChange={inputHandler}
            name="number"
            placeholder=''
          />
        </StyledLabel>
      </div>
      <button>Update</button>
    </form>
  ) : (
    <StyledContainer>
      <StyledTop>
        <StyledH3>Account Settings </StyledH3>
      </StyledTop>
      <StyledMiddle>
        <h4>Username</h4>
        <StyledFlex>
          <StyledImg src={EditIcon} alt="edit icon" />
          <StyledP>{formState.name}</StyledP>
        </StyledFlex>
        <h4>Telephone number</h4>
        <StyledFlex>
          <StyledImg src={EditIcon} alt="edit icon" />
          <StyledP>{formState.number}</StyledP>
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
