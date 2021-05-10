import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const CarouselStyled = styled(Carousel)`
  max-width: 100vw;
  max-height: 100vw;
  margin-top: -2vh;
   @media (max-width: 1000px) {
    width: auto;
   
  }
`;
