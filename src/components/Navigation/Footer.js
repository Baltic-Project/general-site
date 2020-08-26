import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Img = styled.img`
    width:66px;
    height:72px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
        text-decoration:none;
      color: #005EEF;
    }
   
`;
const Image = styled.img`
    width:26px;
    height:18px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  }
   
`;

const FooterWrapper = styled.nav`
    height: 15vh;
  display: flex;
  align-items:center;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  max-width:1350px;

  @media (max-width: 768px) {
   
    height: 11vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }   
    `;
    

const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
`;
const FooterLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`

const FooterItem = styled.li`
  text-decoration: none;
  color: #005EEF;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
 
  position: relative;
  font-family:sans-serif;
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  p{
    font-size:12px;
    color: #F005EE;
  }
  a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  }

 

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  
`

const FooterItemList = styled.li`
  text-decoration: none;
  color: #005EEF;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
 
  position: relative;
  font-family:sans-serif;
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;
  flex-direction:column;  
  align-items:center; 

  p{
    font-size:12px;
    color: #F005EE;
  }
  a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  }

 

  

  
`


const Footer = () => (
    <FooterWrapper>
         <FooterItemList><Link to ="/"><Img src="https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif" /><p>© Unilever 2020</p></Link></FooterItemList>
        <FooterList>            
        <FooterItemList>Social Media<div><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.15.1.48/images/phoenix/facebook-purple-royal.svg" /></Link></p><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.15.1.48/images/phoenix/twitter-purple-royal.svg" /></Link></p><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.15.1.48/images/phoenix/instagram-purple-royal.svg" /></Link></p></div></FooterItemList>
            <FooterItem><Link to="/about">Sitemap</Link></FooterItem>
            <FooterItem><Link to="/brands">Contact</Link></FooterItem>
            <FooterItemList>Legal Links<div><p><Link to="/contact">cookie policy</Link></p><p><Link to="/contact">privacy policy</Link></p><p><Link to="/contact">legal notice</Link></p></div></FooterItemList>           
        </FooterList>
    </FooterWrapper>
);

export default Footer;

