import React from 'react'
import { Link } from 'gatsby'
import HellmannsLogo from '../../assets/images/hellmanns-logo-blue.png'


const HeaderHellmanns = () => {
    return (
        <>
        <nav className="header-hellmanns-nav">
            <div className="links-section">
                <Link to="/">Tooted</Link>
                <Link to="/">Ettevõttest</Link>
                <Link to="/index-hellmanns"><img src={HellmannsLogo} alt="Hellmann's Eesti logo"/></Link>
                <Link to="/">Ajalugu</Link>
                <Link to="/">Kontakt</Link>
            </div>
        </nav>
        </>
    )
};

export default HeaderHellmanns;