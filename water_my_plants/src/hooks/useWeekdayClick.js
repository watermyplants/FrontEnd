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
        // const monday =document.querySelector('.Monday')
        // if(someValue === true){
        //     monday.classList.add('clicked')
        // }else{
        //     monday.classList.remove('clicked')
        // }
    }, [someValue])

    return [someValue, setSomeValue]
}

// export default useWeekdayClick

