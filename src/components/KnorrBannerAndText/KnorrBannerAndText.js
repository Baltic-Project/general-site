import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import ButtonRadius from '../ButtonKnorr';

const KnorrBannerAndText = ({image, imagemobile, title, paragraphText, buttonCTA, buttonLink, second}) => (
    <div className="knorr-bannerandtext-section" style={{flexDirection: second ? `row-reverse` : `row`}}>
        <div className="knorr-image-section">
            <img src={image} className="imagepc"/>
            <img src={imagemobile} className="imagemobile"/>
        </div>
        <div className="knorr-paragraph-section" style={{textAlign: second ? `right` : `left`}}>
            <h2>{title}</h2>
            <p>{paragraphText}</p>
            <ButtonRadius>
                <Link className="knorr-bannerandtext-button-link" to={buttonLink}>
                    {buttonCTA}
                </Link>
            </ButtonRadius>
        </div>
    </div>
);

KnorrBannerAndText.propTypes = {
    image: PropTypes.string.isRequired,
    imagemobile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonCTA: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    second: PropTypes.bool,
}

export default KnorrBannerAndText;