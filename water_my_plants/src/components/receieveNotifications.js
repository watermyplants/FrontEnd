import React, {useState} from 'react'
import styled from 'styled-components';

import Toggle from './toggle'

function Notifications(){

    const StyledNotifications = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

    const StyledH4 = styled.h4`
    padding-left: 5px;
    `;

    const [value, setValue ] = useState(false);

    return(
    <StyledNotifications>
        <StyledH4>Receive text notifications?</StyledH4>
        <Toggle
        isOn={value}
        handleToggle={() => setValue(!value)}
        toggleid='the'
        />
    </StyledNotifications>)
}

export default Notifications