import React from 'react'
import CTA from '../CTA'
import './Header.css'
import Fade from 'react-reveal/Fade';

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <Fade top>
        <h1>Naomi Okorodudu</h1>
        </Fade>
        <h5 className="text-light">Frontend Engineer/Web Developer</h5>
        <CTA />
        <a href="#about" onClick={()=>{props.setActiveNav('#about')}} className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
