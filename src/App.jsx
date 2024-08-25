/* eslint-disable no-unused-vars */
import React from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection.jsx';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';
import BIOSection from './components/BIOSection/BIOSection.jsx';
import APITest from './components/APITest/APITest.jsx';

function App() {

  return (
    <div className='page-wrapper'>
      <HeaderSection/>
      <BIOSection/>
      <ProjectsSection/>

      <APITest/>
    </div>
  )
}

export default App
