/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Logs.css'

function Logs ({logs}) {

    console.log(logs)
    return (
        <div>
            <h1>Логи:</h1>
            <div className='logs-section'>  
                {logs.map(log => (
                    <div key={logs.id} >
                        <p>ID: {log.id}</p>
                        <p>Действие: {log.action}</p>
                        <p>Предыдущее значение: {log.prevValue}</p>
                        <p>Новое значение: {log.newValue}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Logs;