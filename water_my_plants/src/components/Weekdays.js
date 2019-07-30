import React, {useState} from 'react'
import styled from "styled-components"

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
`

export const Weekdays = () => {

    const daysOfTheWeek= [{
        'M': 'monday'}, 
        {'T': 'tuesday'},
        {'W':'wednesday'},
        {'Th': 'thursday'},
        {'F': 'friday'},
        {'S': 'saturday'},
        {'Su': 'sunday'}]

    const [weekdays, setWeekdays] = useState(daysOfTheWeek)

    function Clicked(event) {
        console.log('clicked a day', weekdays)
        setWeekdays(weekdays)
    }

    return (
        <StyledWeekdays>
            <h2>Weekdays to water</h2>
            <div></div>
        <StyledWeekdayDiv>
            <StyledWeekdayButton name='Su' onClick={Clicked}>S</StyledWeekdayButton>
            <StyledWeekdayButton >M</StyledWeekdayButton>
            <StyledWeekdayButton >T</StyledWeekdayButton>
            <StyledWeekdayButton >W</StyledWeekdayButton>
            <StyledWeekdayButton>T</StyledWeekdayButton>
            <StyledWeekdayButton>F</StyledWeekdayButton>
            <StyledWeekdayButton>S</StyledWeekdayButton>
        </StyledWeekdayDiv>
        </StyledWeekdays>
    )
}
