/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'

import './HeaderSection.css';
import Heading from '../Heading/Heading';


function HeaderSection () {
    return (
        <div className='header-section'>
            <Heading
            level = 'h1'
            text = 'Галерея путешествий'
            />
        </div>
    )
}

export default HeaderSection