import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { CarouselStyled } from "./Carousel.style";
import img1 from "../../../../Assets/Images/jpg/carousel1.jpg";
import img2 from "../../../../Assets/Images/jpg/carousel2.jpg";
import img3 from "../../../../Assets/Images/jpg/carousel3.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselStyled
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        height: "90vh",
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{
            width: "100vw",
            height: "90vh",
            margin: "auto",
            display: "block",
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{
            width: "100vw",
            height: "90vh",
            margin: "auto",
            display: "block",
          }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
          alt="Third slide"
          style={{
            width: "100vw",
            height: "90vh",
            margin: "auto",
            display: "block",
          }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselStyled>
  );
}
export default ControlledCarousel;
