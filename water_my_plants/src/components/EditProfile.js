import React, { useState, useEffect } from 'react';
import img from './photos/testimonial1.jpg'
import styled from 'styled-components';



const EditProfile = (props) => {
 const [editing, setEditing ] = useState(false);
 const [ formState, setFormState ] = useState({
     name:'Leah Potter',
     number:'4196667777'
 })


 function submitHandler(event) {
     event.preventDefault()
     if(editing === true){
         setEditing(false)
     } else{
            setEditing(true)        
     }
  }

  useEffect(() => {
      setFormState(props.user || {name: '', number: ''})
      setEditing(true)
  }, [props.user])


const StyledEditBtn = styled.button`
border: none;
outline: none;
background: white;
color: teal;
cursor: pointer;
`;

    return(
        <div className='editprofile-container'>
            <div className='top'>
                <h3>Account Settings</h3>
            </div>
            <div className='image'>
                <img src={img} />
            </div>
            <div className='middle-content'>
                <div className='edit-info'>
                    <h4>{formState.name}</h4>
                    <StyledEditBtn>Edit name</StyledEditBtn>
                    <p>{formState.number}</p>
                    <StyledEditBtn>Edit mobile number</StyledEditBtn>
                </div>
                <div className='bottom-content'>
                    <button>Cancel</button>
                    <button onClick={submitHandler}>Save</button>
                </div> 
            </div>
        </div>
    );
}

export default EditProfile