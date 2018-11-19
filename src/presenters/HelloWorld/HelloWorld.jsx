import React from 'react'
import ChildComponentConnector from '../../connectors/ChildComponentConnector'
import Lego from '../Lego'
import './hello-world.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

let numberStars = 500;

const starsInSky = () => {
    return [...Array(numberStars).keys()]
      .map(index => <div className={`star-container-${index}`} key={index}><div className={`star star-${index}`} key={index} /></div>);
}

const HelloWorld = ({ buttonAction }) => (
  <div>
      <div className="sky">
          { starsInSky() }
          <div className="star__shooting shooting-1" />
      </div>

      <div className="moon">
          <div className="craters-top"></div>
          <div className="craters-bottom"></div>
      </div>



    <div className='title'>Michael Urban</div>
    <div className='navbar-container'>
      <div className='navbar-element'><span className='inner-navbar-element'>about</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>resume</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>projects</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>contact</span></div>
    </div>
    <hr className='breaker' />

      {/*<div className='lego-block'>*/}
          {/*<div className='lego-notches'>*/}
              {/*<div className='notch'></div>*/}
              {/*<div className='notch'></div>*/}
              {/*<div className='notch'></div>*/}
              {/*<div className='notch'></div>*/}
          {/*</div>*/}
          {/*<div className='block'/>*/}
      {/*</div>*/}

      <Lego />

      {/*<div*/}
          {/*data-aos="fade-down"*/}
          {/*data-aos-duration="1000"*/}
          {/*className='aos-test'*/}
      {/*>*/}
      <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          className='aos-test-one'
      />

  {/*<div className='about'>
    <div className='header'>about</div>
    <div className='content'>
      I want to make robots that help people instead of creating robots that take away people's jobs.
    </div>
  </div>*/}





  <div className='header'>Resume</div>
  <div
      className='resume-container'
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
  >
    <div className='company-names'>
      <div className='company'>Pillar Technology</div>
      <div className='company-info'>
        <div className='date'>2014 - Present</div>
        <div className='position'>Senior Software Engineer</div>
      </div>
      {/*<div className='company'>Cisco Systems</div>*/}
      {/*<div className='company-info'>*/}
        {/*<div className='date'>2012 - 2014</div>*/}
        {/*<div className='position'>Software Engineer</div>*/}
      {/*</div>*/}
    </div>
    {/*<div className='job-descriptions'>*/}
      {/*<ul>*/}
      {/*<li>*/}
        {/*Android infotainment system that provides drivers with phone, audio and navigation suggestions based off learning algorithms*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*Web application which helps patients schedule services with their healthcare providers*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*Mobile application to help users choose a doctor based on needs and reviews*/}
      {/*</li>*/}
      {/*<li>*/}
        {/*Warehouse execution system used to help company ship merchandise out of distribution center*/}
      {/*</li>*/}
      {/*</ul>*/}
    {/*</div>*/}
  </div>
  {/*<div className='projects'></div>*/}
  {/*<div className='contact'></div>*/}

  {/*
    <button onClick={ buttonAction }>Action</button>
    <ChildComponentConnector />
  */}
  </div>
)

export default HelloWorld
