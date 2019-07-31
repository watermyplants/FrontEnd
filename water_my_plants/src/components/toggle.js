import React from 'react';
const Toggle = ({ isOn, handleToggle }) => {

    return (
        <>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="toggle-checkbox"
            id={`toggle-new`}
            type="checkbox"
          />
          <label
            style={{ background: isOn && '#78c885'}}
            className="toggle-label"
            htmlFor={`toggle-new`}
          >
            <span className={`toggle-button`} />
          </label>
        </>
      );
    };
    
    export default Toggle;