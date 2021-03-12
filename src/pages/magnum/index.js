import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/Seo/Seo'
import BannerWithVideoMagnum from '../../components/BannerWithVideoMagnum/BannerWithVideoMagnum'
import MagnumBannerAndText from '../../components/MagnumBannerAndText/MagnumBannerAndText'
import MagnumCategories from '../../components/MagnumCategories/MagnumCategories'
import MagnumCategoriesBox from '../../components/MagnumCategories/MagnumCategoriesBox'
import MagnumHeroImg from '../../assets/images/magnum-hero-image.jpg'
import MagnumHeroImgMobile from '../../assets/images/magnum-hero-image-mobile.jpg'
import MagnumVideoBackground from '../../assets/images/magnum-video-background.jpg'
import MagnumIceCreamStick from '../../assets/images/magnum-on-stick.jpg'
import MagnumIceCreamBox from '../../assets/images/magnum-in-box.jpg'
import MagnumDeliver from '../../assets/images/magnum-deliver-now.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const SectionMagnumHP = styled.section`
    width: 100%;
`;

const MagnumHeroImage = styled.img`
    width: 100%;
    height: 550px;
    object-fit: cover;

    @media (max-width: 1200px) {
        height: 400px;
        content: url(${MagnumHeroImgMobile});
    }

    @media (max-width: 692px) {
        margin-top: 50px;
    }
`;

const IndexPageMagnum = () => {
    return (
        <>
        <SEO title="Magnum Eesti" description="Magnum jäätis – naudingule truu. Me usume, et päev ilma tõeliste naudinguteta, on kaotsi läinud päev. Tutvu Magnumi tuntud brändi ja maitsva jäätisevalikuga!"/>
        <SectionMagnumHP>
            <MagnumHeroImage src={MagnumHeroImg} alt="Magnum jäätis"/> 
            <MagnumCategories sectionTitle="Magnum jäätis">
            <ScrollAnimation animateIn="animate__backInLeft" animateOnce="true" animatePreScroll={false} delay="200">
                <MagnumCategoriesBox categoryTitle="Pulgajäätised" categoryImage={MagnumIceCreamStick} categoryLink="/magnum/products?filter=pulgajaatised" alt="Haara Magnumi jäätis"></MagnumCategoriesBox>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__backInRight" animateOnce="true" animatePreScroll={false} delay="200">
                <MagnumCategoriesBox categoryTitle="Perejäätised" categoryImage={MagnumIceCreamBox} categoryLink="/magnum/products?filter=perejaatised" alt="Magnum Eesti"></MagnumCategoriesBox>
            </ScrollAnimation>
            </MagnumCategories>
            <BannerWithVideoMagnum 
                title="Magnum – naudingule truu" 
                paragraph="Me usume, et päev ilma tõeliste naudinguteta, on kaotsi läinud päev." 
                videoId="sKZhcQmGQE8" 
                background={MagnumVideoBackground}
                backgroundMobile={MagnumVideoBackground}
                button
                titleShadow
                videoButtonCTA="Loe rohkem"
                videoButtonLink="/about-magnum"
                >
            </BannerWithVideoMagnum>
            <MagnumBannerAndText 
                image={MagnumDeliver}
                paragraphText="Oleme avanud Bolt Foodi ja Wolti platvormil virtuaalpoed, kust saad tellida oma lemmiku jäätiste kulleriga koju!"
                buttonCTA="Loe rohkem"
                buttonLink="/delivery-magnum"
                >
            </MagnumBannerAndText>
        </SectionMagnumHP>
        </>
    )
}
export default IndexPageMagnum;