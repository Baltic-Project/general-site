import React from 'react';
import ButtonRadius from '../ButtonKnorr';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';


const KnorrCategoriesBox = ({categoryTitle, categoryImage, categoryLink}) => {
    return (
        <>
                <div className="category-box">
                <Link to={categoryLink}>
                        <h3 className="categories-h3">{categoryTitle}</h3>
                    </Link>
                    <Link to={categoryLink}>
                        <img className="categories-img" src={categoryImage}/>
                    </Link>
                    {/* <div className="button-div">
                        <ButtonRadius>
                            <Link className="categories-button-link" to={categoryLink}>
                                Uuri rohkem
                            </Link>
                        </ButtonRadius>
                    </div> */}
                </div>
        </>
    )
}

KnorrCategoriesBox.propTypes = {
    categoryTitle: PropTypes.string.isRequired,
    categoryImage: PropTypes.string.isRequired,
    categoryLink: PropTypes.string.isRequired
}

export default KnorrCategoriesBox;