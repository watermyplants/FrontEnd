import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios'
//import {getWeekday} from '../actions/actions.js'


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

export default function Weekdays(props)  {

    const daysOfTheWeek= [{
        day: 'monday', name: 'M'}, 
        {day: 'tuesday', name: 'T'},
        {day:'wednesday', name: 'W'},
        {day: 'thursday', name: 'Th'},
        {day: 'friday', name: 'F'},
        {day: 'saturday', name: 'S'},
        {day: 'sunday', name: 'Su'}]

    const select =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

    const [days, setWeekdays] = useState([])

    const weekdays =[]

    function PassDays(day){
        const currentDate = new Date()
        daysIncluded(day)
        
    }
    
    function daysIncluded(day) {
        const check = weekdays.includes(day) 
         const index= weekdays.indexOf(day)
       check ?   weekdays.splice(index, 1) : weekdays.push(day)
       console.log(weekdays)
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
     


    return (
        <div>
        <StyledWeekdays>
            <h2>Weekdays to water</h2>
            <div></div>
        <StyledWeekdayDiv>
            {daysOfTheWeek.map((day) =>
                <StyledWeekdayButton onClick={() => PassDays(day.day)}>{day.name}</StyledWeekdayButton>
                )}
        </StyledWeekdayDiv>
        </StyledWeekdays>
        <button onClick={sendSchedule}>send</button>
        </div>
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
