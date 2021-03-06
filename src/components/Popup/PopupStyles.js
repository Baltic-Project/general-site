import { createGlobalStyle } from 'styled-components';

const PopupStyles = createGlobalStyle`
    .popup img{
    min-width:100%;
    height:100px;
    margin:0 !important;
    }
    .popup img:hover{
        transform:none;
    }
    .popup button{
        top: 7%;
        position: absolute;
        right: 3%;
        outline:none;
    }
    .popup button span{
        color:#fff;
    }
    .popup .toast{
        max-width:650px !important;
        flex-basis:100% !important;
        margin:auto;

    }
    .popup .toast-header{
        position: relative;
        border:none !important;
        padding: 0 !important;
    }
`;

export default PopupStyles;