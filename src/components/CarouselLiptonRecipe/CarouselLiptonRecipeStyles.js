import { createGlobalStyle } from 'styled-components';

const CarouselStyleLiptonRecipe = createGlobalStyle`
.carousel-lipton-recipe {
    margin:50px auto 75px;
    max-width: 1000px;
  }

  .carousel-lipton-recipe h2 {
    color: #c8381d;
    text-align: center;
    font-weight: 700;
  }

  .carousel-lipton-recipe .slick-dots li button:before{
      font-size:10px !important;
      color: white !important;
      border: solid 2px #c8381d;
      border-radius: 50%;
      z-index: 9;
    }
    
    .carousel-lipton-recipe .slick-dots li.slick-active button:before{
      color: #c8381d !important;
      background: #c8381d !important;
      opacity: 1 !important;
    }

    .slick-prev {
        left: -50px !important;
    }

    .carousel-lipton-recipe .slick-prev:before, .carousel-lipton-recipe .slick-next:before{
      color: #c8381d;
      opacity: 1 !important;
      font-size: 40px !important;
    }
    .carousel-lipton-recipe .Carousel__SliderDiv-dxiygc{
      margin:0 10px;
      @media(max-width:992px){
        margin: 0 !important;
      }
    }
    /* .carousel-lipton-recipe .slick-prev, .carousel-lipton-recipe .slick-next{
      z-index:99;
    } */

    .carousel-lipton-recipe .slick-slider{
        margin:40px auto;
      }

    @media(max-width:1470px){
      .carousel-lipton-recipe .slick-slider{
        max-width:1100px; 
      }
    }
    
    @media(max-width:1170px){.carousel-lipton-recipe .slick-slider{max-width:768px !important;}}

    .button-recipe {
        margin: 0 !important;
    }
  `;

  export default CarouselStyleLiptonRecipe;