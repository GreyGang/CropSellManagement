import React from "react";
import Button from "./../../Components/Button";
import Card from "../../Components/Card";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <Button onClick={true}>Click Me</Button>
      <Card></Card>
    </div>
  );
}
