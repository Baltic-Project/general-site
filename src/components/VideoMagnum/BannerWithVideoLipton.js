import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonRadius from '../ButtonLipton';
import { Link } from 'gatsby';

const BannerWithVideoLiptonWrapper = styled.div`
    width:100%;
    height: 500px;
    background: url(${props => props.background});
    background-size: cover;
    /* margin: 50px 0; */

    @media(max-width:992px){
      height: auto;
      background: url(${props => props.backgroundMobile});
    }
`;

const BannerLiptonTitle = styled.h1`
    font-size: 2rem;
    /* color: #fff; */
    text-align: center;
    font-weight: bold;
    padding: 40px 0 0;
    /* text-shadow: 2px 2px 10px black; */
`;

const BannerLiptonContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-shadow: none;

    @media(max-width:992px){
      grid-template-columns: 1fr;
    }
`;

const BannerLiptonParagraph = styled.p`
    font-size: 1.5rem;
    /* color: #fff; */
    text-align: left;
    padding: 5% 5% 5% 30%;

    @media(max-width:992px){
      font-size: 1.2rem;
      text-align: center;
      padding: 5%;
    }

    .ButtonLipton__ButtonRadius-fxgQry {
      margin: 20px 0 0 !important;

      @media(max-width:992px){
        margin: 20px auto 0 !important;
      }
    }

    .button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}
`;

const BannerLiptonVideo = styled.div`
    margin: 6% 10% 6% 0;
    max-width: 600px;

    @media(max-width:992px){
      margin: 0 auto;
    }
`;

const BannerLiptonVideoIframe = styled.iframe`
    width: 100% !important;
    max-height: 300px !important;
    border: 2px solid #fade4c;
    border-radius: 20px;

    @media(max-width:992px){
      min-width: 300px !important;
      max-height: 190px !important;
      margin-bottom: 5%;
    }
`;

const BannerWithVideoLipton = ({
    title, 
    paragraph, 
    videoId, 
    background, 
    backgroundMobile, 
    red, 
    titleShadow, 
    margin, 
    button,
    videoButtonCTA,
    videoButtonLink
}) => (
    <BannerWithVideoLiptonWrapper 
      background={background} 
      backgroundMobile={backgroundMobile}
      style={{
        color: red ? "#c8381d" : "#fff", 
        textShadow: titleShadow ? "2px 2px 10px black" : "none",
        margin: margin ? "50px 0" : "0",
      }}
    >
        <BannerLiptonTitle>{title}</BannerLiptonTitle>
        <BannerLiptonContent>
            <BannerLiptonParagraph>
              {paragraph}
              <div style={{display: button ? "block" : "none"}}>
              <ButtonRadius>
                <Link className="button-link" to={videoButtonLink}>
                  {videoButtonCTA}
                </Link>
              </ButtonRadius>
              </div>
            </BannerLiptonParagraph>
            <BannerLiptonVideo>
            <BannerLiptonVideoIframe width="600" height="350" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></BannerLiptonVideoIframe>
            </BannerLiptonVideo>
        </BannerLiptonContent>
    </BannerWithVideoLiptonWrapper>
);

BannerWithVideoLipton.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    backgroundMobile: PropTypes.string.isRequired,
    titleShadow: PropTypes.string,
    red: PropTypes.bool,
    margin: PropTypes.bool,
    button: PropTypes.bool,
    videoButtonCTA: PropTypes.string,
    videoButtonLink: PropTypes.string
}

export default BannerWithVideoLipton;