import React, { useState } from 'react';
import img from './photos/testimonial1.jpg'

const EditProfile = () => {
 const [editing, setEditing ] = useState(false);

    return(
        <div className='editprofile-container'>
            <div className='top'>
                <h1>Account Settings</h1>
            </div>
            <div className='middle-content'>
                {/* <div className='user-image'>
                <img src={img}/>
                <p>Change picture</p>
                </div> */}
                <div className='edit-info'>
                    <h1>Leah Potter</h1>
                    <p>Edit name</p>
                    <p>+1(757) 932-3498</p>
                    <p>Edit mobile number</p>
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