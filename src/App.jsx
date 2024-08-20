/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection.jsx';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';
import BIOSection from './components/BIOSection/BIOSection.jsx';

function App() {

  return (
    <div className='page-wrapper'>
      <HeaderSection/>
      <BIOSection/>
      <ProjectsSection/>
    </div>
  )
}

export default App
