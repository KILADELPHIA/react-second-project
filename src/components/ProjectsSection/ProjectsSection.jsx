/* eslint-disable react/jsx-key */

/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ProjectsSection.css'
import ProjectsCard from '../ProjectCard/ProjectCard';
import project1Img from '../../assets/project1.png';
import project2Img from '../../assets/project2.png';
import project3Img from '../../assets/project3.png';
import project4Img from '../../assets/project4.png';


const projects = [
    {
        title:'Тбилиси, апрель — 83.000',
        image: project1Img,

        isBus: true,
        isPlane: false,
        isPassangers: true,
        passangersCount: 10
    },
    {
        title:'Стамбул, март — 110.000',
        image: project2Img,
        
        isBus: false,
        isPlane: true,
        isPassangers: false
    },
    {
        title:'Дубай, июнь — 220.000',
        image: project3Img,
        
        isBus: false,
        isPlane: true,
        isPassangers: true,
        passangersCount: 15
    },
    {
        title:'Пхукет, сентябрь — 135.000',
        image: project4Img,
        
        isBus: false,
        isPlane: true,
        isPassangers: true,
        passangersCount: 11
    },
]

function ProjectsSection () {
    return (
        projects.map((project) => {
            return (
                <ProjectsCard
                title={project.title}
                image={project.image}
                isBus={project.isBus}
                isPlane={project.isPlane}
                isPassangers={project.isPassangers}
                passangersCount={project.passangersCount}
                />
            )
        })
    )
        
}

export default ProjectsSection;