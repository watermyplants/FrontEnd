import React, { useEffect } from 'react'

import useLocalStorage from './useLocalStorage.js'

export const useWeekdayClick =() => {

    const [someValue, setSomeValue] =useLocalStorage('')

    useEffect(() => {
        const day = document.querySelector('button')
        if(someValue === true){
            day.classList.add('clicked')
        }else{
            day.classList.remove('clicked')
        }
    }, [someValue])

    return [someValue, setSomeValue]
}

// export const useMondayClick =() => {

//     const [someValue, setSomeValue] =useLocalStorage('')

//     useEffect(() => {
//         const day = document.querySelector('.Monday')
//         if(someValue === true){
//             day.classList.add('clicked')
//         }else{
//             day.classList.remove('clicked')
//         }
//     }, [someValue])

//     return [someValue, setSomeValue]
// }