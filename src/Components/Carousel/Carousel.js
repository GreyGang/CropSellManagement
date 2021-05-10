import React, {  useState } from "react";
import { Carousel } from "react-bootstrap";
import { CarouselStyled } from "./Carousel.style";
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
        height: "65vh",
      }}
    >
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
          alt="First slide"
          style={{
            width: "70vw",
            height: "70vh",
            margin: "auto",
            display: "block",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Second slide"
          style={{
            width: "70vw",
            height: "70vh",
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
          src="https://images.unsplash.com/photo-1429991889170-afd56b2a1210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
          alt="Third slide"
          style={{
            width: "70vw",
            height: "70vh",
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
