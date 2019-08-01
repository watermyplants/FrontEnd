import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Toggle from './toggle';
import axios from 'axios'
//import {getWeekday} from '../actions/actions.js'


const StyledWeekdaysContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledWeekdays = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const StyledWeekdayDiv = styled.div`
    display: flex
`

const StyledWeekdayButton= styled.button`
    border-radius: 50%;
    outline: none;
`

const StyledBtn= styled.button`
    border-radius: 50%;
    outline: none;
    display: none;
`

export default function Weekdays(props)  {
    const [weekdayValue, setWeekdayValue ] = useState(false);


    const daysOfTheWeek= [{
        day: 'monday', name: 'M', id: 1}, 
        {day: 'tuesday', name: 'T', id: 2},
        {day:'wednesday', name: 'W', id:3},
        {day: 'thursday', name: 'Th', id:4},
        {day: 'friday', name: 'F', id: 5},
        {day: 'saturday', name: 'S', id: 6},
        {day: 'sunday', name: 'Su', id: 7 }]

    const select =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    const [days, setWeekdays] = useState([])

    const weekdays =[]

    function PassDays(day){
        const currentDate = new Date()
        daysIncluded(day)
        console.log("day",day)
        toggleBackgroundColor(day)
    }
    
    function daysIncluded(day) {
        const check = weekdays.includes(day) 
         const index= weekdays.indexOf(day)
         check ?  weekdays.splice(index, 1) : weekdays.push(day)
       console.log('weekdays', weekdays)
       getSchedule(day)
      
       
    }

    function getSchedule(day) {
        weekdays.map(day => {
            
            const daysSelected = select.indexOf(day)
            const dated = new Date();
            dated.setDate(dated.getDate() + ((daysSelected + 7 - dated.getDay()) % 7) );
            const newNumber = new Date(dated).getTime()
            days.push(newNumber)
            console.log(days)
           
            
        })

    }

    function sendSchedule(){
        days.map(day => {
            //getWeekday(day)
        })
    }

    const [color, setColor] = useState({active:[]})
     
    function toggleBackgroundColor(day){
        const index= color.active.indexOf(day)
        const newActive= index !== -1 ?  color.active.filter(activeDay => activeDay !== day) : color.active.concat(day)
        setColor({active: newActive})
        
        }
    
        
    return (
        <StyledWeekdaysContainer>
        <StyledWeekdays>
            <h2>Weekdays to water</h2>
            <div></div>
        <StyledWeekdayDiv>
            {daysOfTheWeek.map((day) =>
                <StyledWeekdayButton key={day.id} className={color.active.includes(day.day) ? 'clicked' : ''} onClick={() => PassDays(day.day)}>{day.name}</StyledWeekdayButton>
                )}
        </StyledWeekdayDiv>
        <StyledBtn onClick={sendSchedule}>send</StyledBtn>
        </StyledWeekdays>
        <button onClick={sendSchedule}>Set Schedule</button>
        </StyledWeekdaysContainer>
    )
}

// const mapStateToProps = ({ weekday, isFetching, error }) => ({
//     // console.log("mapStateToProps", plantData),
//     plantData,
//     isFetching,
//     error
// });
// export default connect(
//     mapStateToProps,
//     { getWeekday}
// )(Weekdays);
