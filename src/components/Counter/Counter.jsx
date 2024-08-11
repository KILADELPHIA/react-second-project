/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../Counter/Counter.css'


function Counter ({value, isDanger}) {

    const classnames = isDanger ? 'counter__danger' : 'counter'

    return (
        <p className={classnames}>
            {value} 
        </p>
    )
}


export default Counter;