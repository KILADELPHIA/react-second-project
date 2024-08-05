/* eslint-disable react/prop-types */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ProjectCard.css'

function ProjectsCard (props) {
    return (
        <div className='card-wrapper'>
            {props.isBus &&  (<div className='vechicle-card'>НА АВТОБУСЕ</div>)}
            {props.isPlane &&  (<div className='vechicle-card'>НА САМОЛЕТЕ</div>)}
            {props.isPassangers &&  (<div className='passangers-card'>{props.passangersCount} ЧЕЛОВЕК</div>)}
           <img className='image-card'src={props.image} alt={props.title}/> 
           <p className='title-card'>{props.title}</p>

        </div>
    )
}


export default ProjectsCard;