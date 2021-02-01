import { createGlobalStyle } from 'styled-components';

const DoveCategoriesStyles = createGlobalStyle`

.dove-categories-section {
    margin: 50px auto;

    h2 {
        margin: 0 auto;
        color: #054281;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 15px solid rgb(204 210 214 / 48%);
        width: 350px;
        height: 2.5rem;

        @media(max-width:692px){
        width: 90vw;
        margin: 0 auto 20px;
      }
    }
}

.dove-boxes-section {
    margin: 20px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width:767px){
        flex-direction: column;
        margin: 0;
      }
}

.dove-category-box {
    padding: 30px 30px;
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

        @media(max-width:767px){
        height: auto;
        }
    }

    @media(max-width:767px){
        margin: 10px auto;
        max-width: 100%;
        width: 90vw;

        h3 {
            font-size: 2rem;
        }
      }

    img {
    max-width: 200px;
    transition:.5s;
     

        &:hover {
            transform: scale(1.1);
        }
        
    }
}

.dove-img-div {
    background: linear-gradient(180deg, rgb(0 73 118 / 0%) 50%, rgb(204 210 214 / 48%) 100%);
    margin: 0 -20px;
    padding: 20px 0;

    @media(max-width:767px){
        margin: 0 120px;
    }

    @media(max-width:692px){
        margin: 0;
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