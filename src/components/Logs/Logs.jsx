/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Logs.css'

function Logs ({logs, btnClicked}) {

    console.log(logs)
    return (
        <div>
            <h1>Логи:</h1>

            <div className='logs-section'>  
                <div>
                    {logs.map(log => (
                        <p>{log}</p>
                    ))}
                </div>

                <div>
                    {btnClicked.map(btn => (
                        <p>{btn}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}


export default Logs;