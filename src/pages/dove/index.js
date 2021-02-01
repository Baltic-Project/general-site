import React from "react"
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import DoveHomepageHeroImg from '../../assets/images/dove-hero-hp.jpg'
import DoveHomepageHeroImgMobile from '../../assets/images/dove-hero-hp.jpg'
import DoveCategories from '../../components/DoveCategories/DoveCategories'
import DoveCategoriesBox from '../../components/DoveCategories/DoveCategoriesBox'
import creams from '../../assets/images/dove-creams.png'
import deos from '../../assets/images/dove-deos.png'
import hair from '../../assets/images/dove-hair.png'
import showergel from '../../assets/images/dove-shower-gel.png'
import soap from '../../assets/images/dove-soap.png'
import DoveBannerAndText from '../../components/DoveBannerAndText/DoveBannerAndText'
import DoveSustainabilityHeroImg from '../../assets/images/dove-sustainability-hero.jpg'
import DoveSustainabilityHeroImgMobile from '../../assets/images/dove-sustainability-hero-mobile.jpg'
import DovePurposeHeroImg from '../../assets/images/dove-purpose-hero.jpg'
import DovePurposeHeroImgMobile from '../../assets/images/dove-purpose-hero-mobile.jpg'
import BUp from '../../assets/images/happy-shadow-tabl.png'



const Section = styled.section`
    max-width: 1200px;
    margin:10px auto;
    h1 {
      margin: 30px 0 20px;
      text-align: center;
      color: #054281;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      color: #054281;
    }

    ul {
      margin: 0 0 20px 20px;
    }
`;

const DoveBannerAndTextSection = styled.div`
  padding: 0 20px 30px;
;`

const BulletsUp = styled.div`
  background-image: url(${BUp});
  background-repeat: no-repeat;
  background-position: center;
  width:100%;
  padding-top: 50px;
    background-size: 1200px;
`;

const DoveHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
      height: 400px;
    }

    @media (max-width: 692px) {
      margin-top: 50px;
      content: url(${DoveHomepageHeroImgMobile});
    }
`;

const ImageSection = styled.div`
  position: relative;

  &:after {
      content: '';
      background-color: #fff;
      position: absolute;
      border-radius: 100%;
      height: 80px;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -40px;
    }

    @media (max-width: 692px) {
      &:after {
        height: 40px;
        bottom: -20px;
      }
    }
`;

const SustainabilityPageDove = () => {
  return (
   <>
   <SEO title="Dove kehahooldus" description="Dove kehahooldus ja nahahooldus. Tutvu Dove kaubamärgiga. Vaata lähemalt Dove tootevalikut või tutvu meie kaubamärgi eesmärkide ning jätkusuutlikkusega."/>
   <ImageSection>
      <DoveHeroImage src={DoveHomepageHeroImg} alt="Dove"/>
   </ImageSection>
   <Section>
   <DoveCategories sectionTitle="Meie kategooriaid">
      <DoveCategoriesBox categoryTitle="Šampoonid ja palsamid" categoryImage={hair} categoryLink="/" alt="Šampoonid ja palsamid"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Dušigeelid" categoryImage={showergel} categoryLink="/" alt="Dušigeelid"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Deodorandid" categoryImage={deos} categoryLink="/" alt="Deodorandid"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Seebid" categoryImage={soap} categoryLink="/" alt="Seebid"></DoveCategoriesBox>
      <DoveCategoriesBox categoryTitle="Kreemid ja muu" categoryImage={creams} categoryLink="/" alt="Kreemid ja muu"></DoveCategoriesBox>
    </DoveCategories>
    <BulletsUp><img></img></BulletsUp>
    <DoveBannerAndTextSection>
    <DoveBannerAndText
        image={DoveSustainabilityHeroImg}
        imagemobile={DoveSustainabilityHeroImgMobile}
        title="Dove jätkusuutlikkus"
        paragraphText="Kui hoolite meie planeedist ja inimestest, on meil midagi ühist. Dove on täielikult pühendnud jätkusuutlike ja eetliste toodete loomisele."
        buttonCTA="Loe rohkem"
        buttonLink="/dove/sustainability"
        >
      </DoveBannerAndText>
      <DoveBannerAndText
        image={DovePurposeHeroImg}
        imagemobile={DovePurposeHeroImgMobile}
        title="Meie eesmärk"
        paragraphText="Dove usub, et ilu peab olema naiste enesekindluse allikas, mitte looma neis ärevust. Aitame noortel mõista, et nad on ilusad just sellisena, nagu nad on."
        buttonCTA="Loe rohkem"
        buttonLink="/dove/purpose"
        second
        >
      </DoveBannerAndText>
      </DoveBannerAndTextSection>
      </Section>
    </>
  )
}
export default SustainabilityPageDove
