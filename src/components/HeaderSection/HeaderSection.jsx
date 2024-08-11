/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

import './HeaderSection.css';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import Logs from '../Logs/Logs';

const INITIAL_COUNTER_VALUE = 0;
const COUNTER_STEP = 1;
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5;

function HeaderSection () {
    const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE)
    const [logs, setLogs] = useState([])
    const [btnClicked, setBtnClicked] = useState([])

    function handlePlusBtnClick (){
        setCounter((prevCounter) => {
            return prevCounter + COUNTER_STEP
        });
        setLogs([...logs, counter]); // spread оператор
        setBtnClicked([...btnClicked, '+'])

    }

    function handleMinusBtnClick (){
    
        setCounter(((prevCounter) => {
            return prevCounter - COUNTER_STEP
        }))
        setLogs([...logs, counter])
        setBtnClicked([...btnClicked, '-'])
    }

    function isMinusBtnDisabled () {
        return counter === MIN_COUNTER_VALUE;
    }

    function isPlusBtnDisabled () {
        return counter === MAX_COUNTER_VALUE;
    }


    function isCounterOutLimit () {
        return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE
    }


    return (
        <>

            <div className='header-section'>
                <Heading
                level = 'h1'
                text = 'Галерея путешествий'
                />
            </div>

            <Counter 
            value={counter}
            isDanger={isCounterOutLimit()} />

            <Button 
            isDisabled = {isPlusBtnDisabled()}
            text={'Плюс'}
            onClick={handlePlusBtnClick} />

            <Button 
            isDisabled={isMinusBtnDisabled()}
            text={'Минус'}
            onClick={handleMinusBtnClick} />

            <Logs 
            logs={logs} 
            btnClicked = {btnClicked}
            />
        </>
    )
}

export default HeaderSection