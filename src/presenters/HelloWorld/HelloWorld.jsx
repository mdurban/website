import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
import './hello-world.css'
 
const HelloWorld = ({ buttonAction }) => (
  <div>
    <div className='title'>Michael Urban</div>
    <hr />
    <div className='navbar-container'>
      <div className='navbar-element'><span className='inner-navbar-element'>about</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>resume</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>projects</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>contact</span></div>
    </div>


    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  </div>
)

export default HelloWorld
