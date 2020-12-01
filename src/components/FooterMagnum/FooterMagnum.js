import React from 'react';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
import MagnumIceCreamMobile from '../../assets/images/magnum-icecream.png';
import MagnumIceCreamDesktop from '../../assets/images/magnum-icecream2.png';


const FooterMagnum = () => (
  <>
  <div className="footer-magnum-container">
    <nav className="footer-magnum-nav-wrapper">
        <div className="footer-magnum-section">
        <li className="footer-magnum-item-list">
            <div className="footer-magnum-image-containter">
            
            <p><Link to ="https://www.facebook.com/magnumeesti/" target="_blank" rel="noreferrer">
                <img src={FacebookImage} alt="Facebook Icon" className="footer-magnum-social-image"/>
            </Link></p>
            </div>
        </li>
        </div>
            
            <ul className="footer-magnum-list">       
                <li className="footer-magnum-item"><Link to="/sitemap">saidi kaart</Link></li>
                <li className="footer-magnum-item"><Link to="/contact">kontakt</Link></li>
                <li className="footer-magnum-item-list">
                    <a href="/cookie-notice">küpsise-eeskirjad</a>
                    <a href="/privacy-notice">privaatsuspoliitika</a>
                    <a href="/legal-notice">juriidiline teave</a></li>
                <li className="footer-magnum-item">
                <img src={MagnumIceCreamMobile} className="mobile-magnum-footer-graphic-image" alt="Magnum Ice Cream"/>
                <img src={MagnumIceCreamDesktop} className="desktop-magnum-footer-graphic-image" alt="Magnum Ice Cream"/>
            </li>           
            </ul>
    </nav>
  </div>
  <div className="footer-magnum-unilever-div">
    <Link to ="/">
        <img src={UnileverLogoWhite} alt="Unilever logo" className="footer-magnum-unilever-logo"/>
    </Link>
    <div className="footer-magnum-unilever-copyright">© Unilever 2020</div>
  </div>
  </>
);

export default FooterMagnum;

