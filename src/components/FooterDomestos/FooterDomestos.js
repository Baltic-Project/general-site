import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import UnileverLogoWhite from '../../assets/images/unilever-logo-white.png';
import FacebookImage from '../../assets/images/facebook-icon-white.png';
// import DomestosBottle from '../../assets/images/domestos-footer.png';
import DomestosBottle from '../../assets/images/domestos-toilet.png';


const Footercontainer = styled.div`
    height:20vh; 
    z-index:2;
    background:#1B8B35;

    @media (max-width:1600px){
    height:25vh;
  }

    @media (max-width:992px){
    height:100%;
  }

`;

const SocialImage = styled.img`
    width:auto;
    height:50px;
    margin:55px 20px;

  @media (max-width:500px){
      height: 30px;
      margin: 20px 10px 0;
  }
   
`;

const GraphicImage = styled.img`
  width:auto;
  height:250px;
  position: absolute;
  bottom: 0;
  right: -20%;

  @media (max-width:1600px){
    bottom: -5vh;
  }

  @media (max-width:1100px){
    display: none;
  }
`;

const FooterWrapper = styled.nav`
  height: 20vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items:center;
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 30% 0 15%;
  padding: 0 8%;
  z-index: 2;
  align-self: center;
  
  @media (max-width:1600px){
    margin: 0;
    padding: 0 10%;
    max-width: 1000px;
  }

  @media (max-width:992px){
    height:100%;
    margin: 0 auto 5%;
  }
  @media (max-width: 500px) {
    display:flex;
    flex-direction:column;
    margin: 0;
    padding-bottom: 5%;
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

const FooterImageContainer = styled.div`
    display:flex;
`;

const FooterSection = styled.div`
    display:flex;
    justify-content: space-between;
`;

const FooterItem = styled.li`
  line-height:1.2em;
  text-decoration: none;
  color: #fff;
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
    color: #fff;
  }
  a{
      text-decoration:none;
      color: #fff;
      :hover {
      color: #000000;
      transition:0.5s;
  }
  }

  :hover {
    color: #e95c02;
   
  }
  @media(max-width:500px){
    margin:8px;
  }

  
`;

const FooterItemList = styled.li`
  text-decoration: none;
  color: #c8381d !important;
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
    color: #fff;
  }
  a{
      text-decoration:none;
      color: #fff;
      :hover {
      color: #000000;
      transition: all 0.5s;
   
  }
  }

  @media(max-width:500px){
    margin:4px;
    justify-content:center;
    align-items:center;   
  }  
`;

const UnileverFooter = styled.div`
    z-index:2;
    background:#7f7f7f;
    /* padding-left: 24%; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3%;
    /* @media (max-width:1600px){
    padding-left: 12%;
  } */

    @media (max-width:992px){
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
`;

const LogoImage = styled.img`
    width:50px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media(max-width:992px){
      margin: 5px auto 0;
    }
   
`;

const FooterCopyright = styled.div`
    font-size: .8rem;
    color: #fff;
    align-self: center;
    padding-left: 10px;

    @media (max-width:992px){
    padding-bottom: 10px;
    padding-left: 0;
  }
`;


const FooterDomestos = () => (
  <>
  <Footercontainer>
    <FooterWrapper>
        <FooterSection>
        <FooterItemList>
            <FooterImageContainer>
            <p><Link to ="https://et-ee.facebook.com/DomestosSA/" target="_blank" rel="noreferrer">
                <SocialImage src={FacebookImage} alt="Facebook Icon"/>
            </Link></p>
            </FooterImageContainer>
        </FooterItemList>
        </FooterSection>
            <FooterList>            
                <FooterItem><Link to="/sitemap">saidi kaart</Link></FooterItem>
                <FooterItem><Link to="/contact">kontakt</Link></FooterItem>
                <FooterItemList><a href="/cookie-notice">küpsise-eeskirjad</a><a href="/privacy-notice">privaatsuspoliitika</a><a href="/legal-notice">juriidiline teave</a></FooterItemList>           
            </FooterList>
        <GraphicImage src={DomestosBottle}/>
    </FooterWrapper>
  </Footercontainer>
  <UnileverFooter>
    <Link to ="/"><LogoImage src={UnileverLogoWhite} /></Link><FooterCopyright>© Unilever 2020</FooterCopyright>
  </UnileverFooter>
  </>
);

export default FooterDomestos;

