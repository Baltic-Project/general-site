import React from 'react'
import { Link } from 'gatsby'
import DoveLogo from '../../assets/images/dove-logo-main.png'


const HeaderDove = () => {
    return (
        <>
        <nav className="header-dove-nav">
            <div className="links-section-dove">
                <Link to="/dove/products" activeStyle={{fontWeight: "700"}}>Tooted</Link>
                <Link to="/dove/sustainability" activeStyle={{fontWeight: "700"}}>Jätkusuutlikkus</Link>
                <Link to="/dove"><img src={DoveLogo} alt="Dove Eesti jäätis logo"/></Link>
                <Link to="/dove/purpose" activeStyle={{fontWeight: "700"}}>Meie eesmärk</Link>
                <a href="/contact" target="_blank" activeStyle={{fontWeight: "700"}}>Kontakt</a>
            </div>
        </nav>
        </>
    )
};

export default HeaderDove;