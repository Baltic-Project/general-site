import { createGlobalStyle } from 'styled-components';
import DoveBoxBackground from '../../assets/images/categories-background.png'

const DoveCategoriesStyles = createGlobalStyle`

.dove-categories-section {
    margin: 50px auto;

    .h2-div {
        width: 330px;
        margin: 0 auto 30px;
        position: relative;

        h2 {
            font-size: 2rem;
            color: #054281;
            text-align: center;
            font-weight: 700;
            text-transform: uppercase;
        }

        @media (max-width: 320px) {
            width: 310px;
            
            h2 {
                font-size: 1.8rem;
            }
        }

        &:after {
            background: linear-gradient(to right,#b78938 0,#dabf80 25%,#ffe2ac 51%,#dabf80 76%,#b78938 100%);
            height: 5px;
            width: 330px;
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;

            @media (max-width: 320px) {
                width: 310px;
            }
        }
    }
}

.dove-boxes-section {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width:768px){
        flex-direction: column;
        margin: 0 auto;
      }
}

.dove-category-box {
    max-width: 240px;
    text-align: center;

    h3 {
        color:#054281;
        text-align: center;
        font-size: 26px;
        font-weight:700;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;

        @media(max-width:768px){
        height: auto;
        }
    }

    @media(max-width:768px){
        margin: 10px auto;
        max-width: 100%;
        width: 90vw;

        h3 {
            font-size: 2rem;
        }
      }
}

.dove-img-div {
    background-image: url(${DoveBoxBackground});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    width: 250px;
    height: 250px;

    @media(max-width:768px){
        margin: 30px auto;
    }
}

.dove-categories-cover-img {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #dabf80;
    width: 190px;
    top: 50%;
    left: 50%;
    transform: translateX(-45%) translateY(-60%);
    transition: .5s;
    z-index: 1;

    &:hover {
        opacity: 0;
    }
}

.dove-categories-img {
    position: absolute;
    width: 130px;
    bottom: 10px;
    right: -20px;
    transition: .5s;
    z-index: 2;

    &:hover {
        transform: scale(1.1);
    }
}

.dove-category-name {
    position: absolute;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-45%) translateY(-60%);
    color: #054281;
    background: linear-gradient(to right,#b78938 0,#dabf80 25%,#ffe2ac 51%,#dabf80 76%,#b78938 100%);

    p {
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    @media (max-width: 768px) {
        z-index: 1;
        opacity: .8;
    }
}

.dove-button-div {
    margin: 10px -20px -30px;
}

.dove-categories-button-link {
    text-decoration: none;
    color: inherit;
    font-size: 1.5rem;
    

    &:hover {
        text-decoration: none;
        color: inherit;
    }
}
`;

export default DoveCategoriesStyles;