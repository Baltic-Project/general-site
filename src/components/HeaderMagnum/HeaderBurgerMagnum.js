import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import MagnumLogo from '../../assets/images/magnum-logo-brown.png'

const Hamburger = styled.div`
  background-color: #523022;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: absolute;
  z-index: 999;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #523022;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const HeaderBurgerMagnum = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="magnum-burger-menu" 
        style={{
            height: navbarOpen ? "400px" : "8vh", 
            transition: "all .2s linear", 
            borderRadius: navbarOpen ? "0 0 50% 50%" : "0"
    }}>
      <img src={MagnumLogo} alt="Magnum logo"/>
      <div 
        className="magnum-toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      <div className="magnum-navbox" style={{opacity: navbarOpen ? "1" : "0"}}>
          <Link className="magnum-navbox-item" to="/index-magnum" onClick={() => setNavbarOpen(!navbarOpen)}>Products</Link>
          <Link className="magnum-navbox-item" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>About</Link>
          <Link className="magnum-navbox-item" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Delivery Now</Link>
          <Link className="magnum-navbox-item" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>Contact</Link>
        </div>
    </nav>
  )
}

export default HeaderBurgerMagnum;