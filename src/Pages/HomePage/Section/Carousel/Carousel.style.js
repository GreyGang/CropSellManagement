import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CarouselStyled = styled(Carousel)`
  max-width: 100vw;
  max-height: 100vh;
  margin-top: -2vh;
  @media (max-width: 1024px) {
    max-width: 100vw;
    max-height: 100vh;
  }

  @media(max-width: 1024){
    .d-none {
    display: block!important;
    }
  }
`;
