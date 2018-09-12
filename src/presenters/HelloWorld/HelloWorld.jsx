import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
import './hello-world.css'
 
const HelloWorld = ({ buttonAction }) => (
  <div>
    <div className='title'>Mike D. Urban</div>
    <div className='navbar-container'>
      <div className='navbar-element'><span className='inner-navbar-element'>About</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>Resume</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>Projects</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>Contact</span></div>
    </div>

    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  </div>
)

export default HelloWorld
