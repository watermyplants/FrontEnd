import React, { useState } from 'react';
import img from './photos/testimonial1.jpg'
import styled from 'styled-components';



const EditProfile = () => {
//  const [editing, setEditing ] = useState(false);
//  const initialFormState = { name:'', number: ''}
//  const [account, setAccount ] = useState(initialFormState)


const StyledEditBtn = styled.button`
border: none;
outline: none;
background: white;
color: teal;
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
                    <h4>Leah Potter</h4>
                    <StyledEditBtn>Edit name</StyledEditBtn>
                    <p>+1(757) 932-3498</p>
                    <StyledEditBtn>Edit mobile number</StyledEditBtn>
                </div>
                <div className='bottom-content'>
                    <button>Cancel</button>
                    <button>Save</button>
                </div> 
            </div>
        </div>
    );
}

export default EditProfile