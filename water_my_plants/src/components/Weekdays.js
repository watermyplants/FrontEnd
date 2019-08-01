import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Toggle from './toggle';
import axios from 'axios'
//import {getWeekday} from '../actions/actions.js'


const StyledWeekdaysContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: white;
`;

const StyledWeekdays = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const StyledWeekdayDiv = styled.div`
    // display: flex
`

const StyledWeekdayButton= styled.button`
    border-radius: 50%;
    outline: none;
`

const StyledSchedulebtn= styled.button`
color: white;
background: #78c885;
border: none;
border-radius: 3px;
outline: none;
padding: 10px 10px 10px 10px;
margin-top: 10px;
cursor:pointer;
`

const StyledH4 = styled.h4`
color: teal;
font-size: 20px;
`;


export default function Weekdays()  {
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
        toggleBackgroundColor()
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

    const [color, setColor] = useState({active:[false]})
     
    function toggleBackgroundColor(index){
        const currentColor = color.active
        console.log('current color', color)
        setColor({active: !currentColor})
        console.log('set current color', color)
        
        
        }
    
        
    return (
        <StyledWeekdaysContainer>
        <StyledWeekdays>
            <StyledH4>Weekdays to water</StyledH4>
            <div></div>
        <StyledWeekdayDiv>
            {daysOfTheWeek.map((day) =>
                <StyledWeekdayButton key={daysOfTheWeek.id} className={color.active ? 'clicked' : ''} onClick={() => PassDays(day.day)}>{day.name}</StyledWeekdayButton>
                )}
        </StyledWeekdayDiv>
            <StyledSchedulebtn onClick={sendSchedule}>Set Schedule</StyledSchedulebtn>
        </StyledWeekdays>
            <Toggle
            isOn={weekdayValue}
            handleToggle={() => setWeekdayValue(!weekdayValue)}
            toggleid='this'
            />
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
