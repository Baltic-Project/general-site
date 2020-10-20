import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


const Footercontainer = styled.div`

    width:100vw;
    height:20vh; 
    z-index:2;
    background:#fff;
    @media (max-width:992px){
    height:100%;
  }

`;
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
    @media(max-width:500px){
      width:53px;
      height:54px;
      
      a {
        p{font-size:12px;}
        }
    }
   
`;
const Image = styled.img`
    width:26px;
    height:16px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:14px;
    a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    
  }
  }
   
`;

const FooterWrapper = styled.nav`
  height: 20vh;
  display: flex;
  align-items:center;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  width:100vw;
  max-width:1300px;
  
  @media (max-width:992px){
    height:100%;
  }
  @media (max-width: 500px) {
   display:flex;
   flex-direction:column;
   
  }   
    `;
    

const FooterList = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    @media(max-width:500px){
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
`;
const FooterLogo = styled.span`
a{
    text-decoration:none;
    color:#000;
}
`

const FooterImageContainer = styled.div`

    display:flex;

`

const FooterItem = styled.li`
  line-height:1.2em
  text-decoration: none;
  color: #005EEF;
  font-weight:bold;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw; 
  position: relative;  
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;

  p{
    font-size:12px;
    color: #005EEF;
  }
  a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
    
  }
  }

 

  :hover {
    color: goldenrod;
   
  }
  @media(max-width:500px){
    margin:8px;
    a{
      font-size: 14px;
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
 
  text-transform:capitalize;
  list-style:none;
  text-decoration:none;
  display:flex;
  flex-direction:column;  
  align-items:center; 

  p{
    font-size:12px;
    color: #005EEF;
  }
  a{
      text-decoration:none;
      color: #005EEF;
      :hover {
    color: goldenrod;
   
  }
  }

  @media(max-width:500px){
    margin:4px;
    font-size:14px;
    justify-content:center;
    align-items:center; 
    a{
      font-size: 10px;
    }
    p{
      font-size:8px;
    }
  
   
  }  
`


const Footer = () => (
  <Footercontainer>
    <FooterWrapper>
         <FooterItemList><Link to ="/"><Img src="https://www.unilever.com/Images/UNILEVER_LOGO_160_tcm244-541804.gif" /></Link><p>© Unilever 2020</p></FooterItemList>
        <FooterList>            
        <FooterItemList>Social Media<FooterImageContainer><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.16.54/images/phoenix/facebook-purple-royal.svg" /></Link></p><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.16.54/images/phoenix/twitter-purple-royal.svg" /></Link></p><p><Link to ="/"><Image src="https://www.unilever.pl/resources/7.16.54/images/phoenix/instagram-purple-royal.svg" /></Link></p></FooterImageContainer></FooterItemList>
            <FooterItem><Link to="/about">Sitemap</Link></FooterItem>
            <FooterItem><Link to="/brands">Contact</Link></FooterItem>
            <FooterItemList>Legal Links<div ><p><Link to="/contact">cookie policy</Link></p><p><Link to="/contact">privacy policy</Link></p><p><Link to="/contact">legal notice</Link></p></div></FooterItemList>           
        </FooterList>
    </FooterWrapper>
    </Footercontainer>
);

export default Footer;

