import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
import './hello-world.css'
 
const HelloWorld = ({ buttonAction }) => (
  <div>
    <div className='navbar'> Hello</div>
    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  </div>
)

export default HelloWorld
