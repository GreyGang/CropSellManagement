import React from "react";
import Button from "./../../Components/Button";
import Card from "../../Components/Card";
import { HomeWrapper } from "./index.style";
export default function HomePage() {
  return (
    <HomeWrapper>
      <div>
        <h1>Welcome to HomePage</h1>
        <Button onClick={true}>Click Me</Button>
        <Card></Card>
      </div>
    </HomeWrapper>
  );
}
