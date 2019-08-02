import React, { useState } from "react";
import styled from 'styled-components'
import DeletePlant from "./DeletePlant";

// "EditPlant.js" ***********************************************************************
// Initial State Passed in: 
//     'plant' (name, type, location, id) | 'update' (function) 
// **************************************************************************************

const StyledAddbtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 30px 10px 30px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const StyledEditContainer = styled.div`
    width: 295px;
    // border: 1px solid red;
    background-color: #e7e7e7;
    margin: 0 auto;
    margin-left: 4%;
    border-radius: 4px;
    margin-top: 2.4%;
    margin-right: 5%;
    height: 230px;
`;

const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
    padding-left: 6%;
    padding-top: 5%;
    padding-bottom: 3%;
    color: #198974;
  `;

  const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2%;
    padding-right: 5%;
    padding-bottom: 5%;
  `;

  const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7ea897;
  `;

  const StyledInput = styled.input`
    width: 77%;
    border-radius: 4px;
    height: 20px;
  `;

  const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1%;
    align-items: flex-end;
    // border: 1px solid red;
  `;

const EditPlant = props => {

    // **************************************************************************************
    //  Sets up state for inputs and editing
    // **************************************************************************************

    const { name, type, location, id } = props.plant;
    const [input, setInput] = useState({ name: name, type: type, location: location, id: id });
    const [editing, setEditing] = useState(false);
    
    // **************************************************************************************
    // "handleEdit" will set 'editing' to false.

    // "inputHandler" tracks the input fields into state 'input'. 'editing' === 'true' during this process

    //  "handleUpdate" will update the card by calling 'update' with a param of 'input'
    // **************************************************************************************

    const handleEdit = e => {
        setEditing(!editing);
    };

    const inputHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log("EDITING IN PROGRESS...");
    };

    const handleUpdate = e => {
        e.preventDefault();
        props.update(input);
        setEditing(false);
        console.log(`CARD ${props.plant.id} UPDATED SUCESSFULLY`);
    };

    // Edit Form *****************************************************************************
    // Uses turnary opperator to check if edditing is in progress.. returns values once submited
    //  **************************************************************************************
    return editing ? (
        <StyledEditContainer>
            <form onSubmit={handleUpdate} className="new-plant">
                <StyledH1>Edit Plant</StyledH1>
                <StyledInputContainer>
                    <StyledLIDiv>
                    <Styledlabel htmlFor="Name">
                        Name:{" "}
                        </Styledlabel>
                        <StyledInput type="text" value={input.name} onChange={inputHandler} name="name" />
                    </StyledLIDiv>

                    <StyledLIDiv>
                    <Styledlabel htmlFor="Type">
                        Type:{" "}
                        </Styledlabel>
                        <StyledInput type="text" value={input.type} onChange={inputHandler} name="type" />
                    </StyledLIDiv>

                    <StyledLIDiv>
                    <Styledlabel htmlFor="Location">
                        Location:{" "}</Styledlabel>
                        <StyledInput type="text" value={input.location} onChange={inputHandler} name="location" />
                    </StyledLIDiv>

                </StyledInputContainer>
                <StyledAddbtn>Update</StyledAddbtn>
            </form>
            </StyledEditContainer>
    ) : (
            <div className="new-plant">
                {/* <h3>Name</h3>
                <p>{ name }</p>
                <h3>Type</h3>
                <p>{ type }</p>
                <h3>Location</h3>
                <p>{ location }</p> */}
                <StyledAddbtn onClick={handleEdit}>Edit</StyledAddbtn>
            </div>
    );
};

export default EditPlant;
