import { createGlobalStyle } from 'styled-components';

const HeaderDoveStyles = createGlobalStyle`
.header-cif-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    height: 60px;
    padding: 10px 20%;
    text-align: center;
    background: linear-gradient(to right,#165648,#20856e);

    @media(max-width:1600px){
        padding: 10px 15%;
    }

    @media(max-width:1100px){
        padding: 10px 20px;
    }

    @media(max-width:692px){
        display: none;
    }

    img {
        height: 90px;
        z-index: 999; 
    }
}

.links-section-cif {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: -30px;

    a {
        color: #fff;
        align-self: center;
        font-size: 1.2rem;
        transition: all .3s ease;
        padding: 5px 20px;
        margin: 0 auto;
        border-bottom: 3px solid transparent;
        border-left: 3px solid transparent;
        border-radius: 45%;

        &:hover {
            border-bottom: 3px solid #2fa354;
            border-left: 3px solid #2fa354;
            border-radius: 50%;
            width: auto;
            padding: 5px 20px;
        }
    }
}

a.active {
    border-bottom: 3px solid #2fa354;
    border-left: 3px solid #2fa354;
    border-radius: 50%;
    width: auto;
    padding: 5px 20px;
}

`;

export default HeaderDoveStyles;