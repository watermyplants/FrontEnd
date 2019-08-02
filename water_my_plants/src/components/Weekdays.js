import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Toggle from './toggle';
import axios from 'axios'
//import {getWeekday} from '../actions/actions.js'


const StyledWeekdaysContainer = styled.div`
display: flex;
justify-content: flex-start;
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
    display: flex
    width: 17rem;
    
`

const StyledWeekdayButton= styled.button`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 1%;
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
margin-left: 60%;
margin-right: 0;
`

const StyledH4 = styled.h4`
color: teal;
font-size: 15px;
margin-right: 58px;
`;

const StyledTitleToggleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
    margin-left:  5%;
    height: 45px;
    margin-top: 2%;
`


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
            <StyledTitleToggleDiv>
            <StyledH4>Weekdays to water</StyledH4>
            <Toggle
            isOn={weekdayValue}
            handleToggle={() => setWeekdayValue(!weekdayValue)}
            toggleid='this'
            />
            </StyledTitleToggleDiv>
        <StyledWeekdayDiv>
            {daysOfTheWeek.map((day) =>
                <StyledWeekdayButton key={day.id} className={color.active.includes(day.day) ? 'clicked' : 'weekdaybtn'} onClick={() => PassDays(day.day)}>{day.name}</StyledWeekdayButton>
                )}
        </StyledWeekdayDiv>
            <StyledSchedulebtn onClick={sendSchedule}>Set Schedule</StyledSchedulebtn>
        </StyledWeekdays>
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
