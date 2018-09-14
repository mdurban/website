import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
import './hello-world.css'
 
const HelloWorld = ({ buttonAction }) => (
  <div>
    <div className='title'>Michael Urban</div>
    <div className='navbar-container'>
      <div className='navbar-element'><span className='inner-navbar-element'>about</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>resume</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>projects</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>contact</span></div>
    </div>
    <hr />

  {/*<div className='about'>
    <div className='header'>about</div>
    <div className='content'>
      I want to make robots that help people instead of creating robots that take away people's jobs.
    </div>
  </div>*/}
  <div className='header'></div>
  <div className='resume-container'>
    <div className='company-names'>
      <div className='company'>Pillar Technology</div>
      <div className='company-info'>
        <div className='date'>2014 - Present</div>
        <div className='position'>Senior Software Engineer</div>
      </div>
      <div className='company'>Cisco Systems</div>
      <div className='company-info'>
        <div className='date'>2012 - 2014</div>
        <div className='position'>Software Engineer</div>
      </div>
    </div>
    <div className='job-descriptions'>
      <ul>
      <li>
        Android infotainment system that provides drivers with phone, audio and navigation suggestions based off learning algorithms
      </li>
      <li>
        Web application which helps patients schedule services with their healthcare providers
      </li>
      <li>
        Mobile application to help users choose a doctor based on needs and reviews
      </li>
      <li>
        Warehouse execution system used to help company ship merchandise out of distribution center
      </li>
      </ul>
    </div>
  </div>
  <div className='projects'></div>
  <div className='contact'></div>

  {/*
    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  */}
  </div>
)

export default HelloWorld
