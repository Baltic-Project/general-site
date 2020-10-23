import { createGlobalStyle } from 'styled-components';

const QuotesStyles = createGlobalStyle`
    .quotes .Quotes__QuotesDiv-klnUPB dFoyAE{
     display: none !important;
    }
    .quotes .slick-slider {
    z-index:1;
    margin:0 0 100px 0 !important;;
    }
    .quotes .slick-dots{
    bottom: 20px !important;
    }
    .quotes .slick-dots li button:before{
    font-size:14px !important;
    }
    .quotes.slick-dots li.slick-active button:before{
    color: red !important;
    }
    .quotes .slick-prev{
    width: 70px !important;
    height: 110px !important;
    left:-65px !important;
    }
    .quotes .slick-dots li.slick-active button:before{
    color:#fff !important;
    }
    .quotes .slick-next{
    width: 60px;
    height: 120px;
    }
    .quotes .slick-prev::before{
    border-right: 2px solid;
        content: '';
        display: block;
        height: 50px;
        margin-top: -4px;
        transform: rotate(50deg);
        right: 23px;
        top: 14%;
        width: 0;
        opacity: 1 !important;
        position: absolute;
    }
    .quotes .slick-prev::after{
    border-right: 2px solid;
    content: '';
    display: block;
    height: 50px;
    margin-top: -12px;
    transform: rotate(132deg);
    right: 23px;
    top: 50%;
    width: 4px;
    color: #fff;
    position: absolute;
    }
    .quotes .slick-next:before{
        border-right: 2px solid;
        content: '';
        display: block;
        height: 50px;
        margin-top: -4px;
        transform: rotate(130deg);
        right: 28px;
        top: 20%;
        width: 0;
        opacity: 1 !important;
        position: absolute;
    }
    .quotes .slick-next:after{
    border-right: 2px solid;
    content: '';
    display: block;
    height: 50px;
    margin-top: -32px;
    transform: rotate(45deg);
    right: 26px;
    top: 70%;
    width: 4px;
    color: #fff;
    position: absolute;
    }
    @media(max-width:992px){
    .Quotes__SliderTextCenter-hgaThY{
        margin:0 !important;
        padding: 0 !important;
    }
    .quotes .slick-slider img{
        margin:0 0 20px 0 !important;
    }
    .right-quotes-section p{
        font-size: 14px;;
    }
    .quotes .slick-dots{
        bottom: -25px !important;
    }
    .header-users h2{
        font-size: 45px !important;
        text-align: center !important;
        margin-bottom: 20px !important;
    }
    }
    @media(max-width:1470px){
    .quotes.slick-slider{
        max-width:1100px; margin:auto;
    }
    .left-quotes-section img{
        display: none;
    }
    }
    @media(max-width:850px){
    .quotes .slick-slider{
        max-width:450px !important; 
        margin:auto;
    }
    }
    @media(max-width:1170px){
    .quotes .slick-slider{
        max-width:768px !important; margin:auto;
    }
    }
    .header-users h2{
    text-align: left;
    margin-bottom: 40px;
    font-size: 50px;
    }

    .left-quotes-section{
    text-align: left;
    position: relative;
    }

    .left-quotes-section img{
    position: absolute;
    top: -15%;
    left: -10%;
    width: 70px;
    }
    .left-quotes-section p{
    font-style: italic !important;
    }
    .right-quotes-section img{
    min-width: 100%;
    }
    .right-quotes-section img:hover{
    transform:none !important;
    }
`;

export default QuotesStyles;