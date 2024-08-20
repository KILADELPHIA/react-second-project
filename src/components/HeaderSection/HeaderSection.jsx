/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

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
    

    function handlePlusBtnClick (){
        const newValue = counter + COUNTER_STEP;

        const log = {
            id: uuidv4(),
            action: 'plus',
            prevValue: counter,
            newValue: newValue ,
        }


        setCounter((prevCounter) => {
            return prevCounter + COUNTER_STEP
        });
        setLogs([...logs, log]); // spread оператор
        

    }

    function handleMinusBtnClick (){
        const newValue = counter - COUNTER_STEP;

        const log = {
            id: uuidv4(),
            action: 'minus',
            prevValue: counter,
            newValue: newValue ,
        }
    
        setCounter(((prevCounter) => {
            return prevCounter - COUNTER_STEP
        }))
        setLogs([...logs, log])

        
       
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
        
            />
        </>
    )
}

export default HeaderSection