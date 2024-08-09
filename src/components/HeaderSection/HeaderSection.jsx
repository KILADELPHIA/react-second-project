/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

import './HeaderSection.css';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';


function HeaderSection () {
    const [counter, setCounter] = useState(0)
   
    function handlePlusBtnClick (){
        setCounter((prevCounter) => {
            return prevCounter - 1
        })
    }

    function handleMinusBtnClick (){
    
        setCounter(((prevCounter) => {
            return prevCounter + 1
        }))
    }
    return (
        <>
            <div className='header-section'>
                <Heading
                level = 'h1'
                text = 'Галерея путешествий'
                />
            </div>

            <p>{counter}</p>
            <Button 
            text={'Плюс'}
            onClick={handlePlusBtnClick}
            />

            <Button 
            text={'Минус'}
            onClick={handleMinusBtnClick}
            />
        </>
    )
}

export default HeaderSection