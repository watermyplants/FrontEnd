import React, {useState, useEffect} from 'react'
import styled from "styled-components"

import {useWeekdayClick} from '../hooks/useWeekdayClick.js'


const StyledWeekdays = styled.div`
    display: flex;
    flex-direction:column;
    //justify-content: center;
`

const StyledWeekdayDiv = styled.div`
    display: flex
`

const StyledWeekdayButton= styled.button`
    border-radius: 50%;
    outline: none;
`

export const Weekdays = (props) => {

    const daysOfTheWeek= [{
        'M': 'monday'}, 
        {'T': 'tuesday'},
        {'W':'wednesday'},
        {'Th': 'thursday'},
        {'F': 'friday'},
        {'S': 'saturday'},
        {'Su': 'sunday'}]

    const [weekdays, setWeekdays] = useState(daysOfTheWeek)

    // function Clicked(event) {
        
    //     setWeekdays(weekdays)
    // }

    const [clickedWeekday, setClickedWeekday] = useWeekdayClick(false);
    const Clicked = e => {
        e.preventDefault();
        console.log('clicked a day',)
        setClickedWeekday(!clickedWeekday);
    };

    // useEffect(() => {
    //     const day = document.querySelector('button')
    //     day.classList.add('clicked')
    // },[weekdays])

    return (
        <StyledWeekdays>
            <h2>Weekdays to water</h2>
            <div></div>
        <StyledWeekdayDiv>
            <StyledWeekdayButton onClick={Clicked}>S</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>M</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>T</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>W</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>T</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>F</StyledWeekdayButton>
            <StyledWeekdayButton onClick={Clicked}>S</StyledWeekdayButton>
        </StyledWeekdayDiv>
        </StyledWeekdays>
    )
}
