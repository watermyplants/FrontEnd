import React from 'react';
const Toggle = ({ isOn, handleToggle, toggleid }) => {

    return (
        <>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="toggle-checkbox"
            id={toggleid}
            type="checkbox"
          />
          <label
            style={{ background: isOn && '#78c885'}}
            className="toggle-label"
            htmlFor={toggleid}
          >
            <span className={`toggle-button`} />
          </label>
        </>
      );
    };
    
    export default Toggle;