import React from 'react'
import './hello-world.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

let numberStars = 500;

const starsInSky = () => {
  return [...Array(numberStars).keys()]
    .map(index => <div className={`star-container-${index}`} key={index}><div className={`star star-${index}`} key={index} /></div>);
}

const HelloWorld = ({ buttonAction }) => (
  <div>
    <div className="sky">
      {starsInSky()}
      <div className="star__shooting shooting-1" />
    </div>

    <div className="moon">
      <div className="craters-top"></div>
      <div className="craters-bottom"></div>
    </div>

    <div className='title'>ekkamai designs</div>
    <div className='sub-title'>Web Development | Design</div>
    <div className='navbar-container'>
      <div className='navbar-element'><span className='inner-navbar-element'>about</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>work</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>team</span></div>
      <div className='navbar-element'><span className='inner-navbar-element'>contact</span></div>
    </div>
    <hr className='breaker' />
    {/* <a href="#" class="scroll-indicator" address="true"></a> */}
    
    <div className='about-container'>
      {/* <div className='header'>About</div> */}
      <div className='description'>
        <div className='description-primary'>
          <div className='description-main'>Helping make websites for those helping others.</div>
          <div className='spacer'></div>
          <div className='spacer'></div>
        </div>
        <p className='description-secondary'>
          If you're part of a non-profit organization, small business, church or just an all-around good person and need a website,
          feel free to contact me!
        </p>
      </div>
    </div>

  </div>

)

export default HelloWorld
