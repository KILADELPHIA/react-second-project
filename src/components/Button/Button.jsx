/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Button.css'

function Button ({text, isDisabled, onClick}) {

    return (
        <button 
        disabled={isDisabled}
        onClick={onClick}
        className='btn-default'
        >
            {text}
        </button>
    )
}


export default Button;