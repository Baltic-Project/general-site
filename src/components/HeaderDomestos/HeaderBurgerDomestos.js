import React, { useState } from 'react'
import styled from 'styled-components'
import { a } from 'gatsby'
import DomestosLogo from '../../assets/images/domestos-logo2.png'


const HeaderBurgerDomestos = () => {
  return (
    <nav role="navigation">
    <div id="menuToggle">
    <input type="checkbox" className="toggler"/>
    <div class="hamburger"><div></div></div>
    <a href="/index-domestos"><img src={DomestosLogo} alt="Domestos Eesti WC-puhastusvahendid logo"/></a>
    <ul id="menu">
                <li><a activeClassName="current" href="/products-domestos">Tooted</a></li>
                <li><a activeClassName="current" href="/about-domestos">Ettevõttest</a></li>
                <li><a activeClassName="current" href="/sustainability-domestos">Sustainability</a></li>
                <li><a activeClassName="current" href="/blog-domestos">Blog</a></li>
                <li><a activeClassName="current" href="/constact-domestos">Kontakt</a></li>
    </ul>
  </div>
</nav>
  )
}

export default HeaderBurgerDomestos;