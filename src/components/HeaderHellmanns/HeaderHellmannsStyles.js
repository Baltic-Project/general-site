import { createGlobalStyle } from 'styled-components';

const HeaderHellmannsStyles = createGlobalStyle`
.header-hellmanns-nav {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    height: 75px;
    border-bottom: 3px solid #004976;
    text-align: center;
    background: #fdf6e8;

    @media(max-width:992px){
        display: none;
    }

    img {
        height: 123px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -10px;
    }
}

.links-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 10% 10px;
    text-transform: uppercase;
    font-weight: 700;

    @media(max-width:1200px){
        padding: 20px 0 10px;
    }

    a {
        color: #004976;
        align-self: center;
        font-size: 1.2rem;
        transition: all .2s ease;
        height: 2rem;
        padding: 0 10px;
        
        &:hover {
            border-bottom: 15px solid #ffc72e;
        }
    }
}
`;

export default HeaderHellmannsStyles;