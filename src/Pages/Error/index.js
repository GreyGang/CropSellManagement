import React from "react";
import Button from "./../../Components/Button";
import styled from "styled-components";

const H1 = styled.h1 `
  text-align: center;
`;
export default function Error() {
  return (
    <div>
      <H1>404</H1>
      <H1>OOPS! PAGE NOT FOUND</H1>
      <Button>Go To Homepage</Button>
    </div>
    
  );
}
