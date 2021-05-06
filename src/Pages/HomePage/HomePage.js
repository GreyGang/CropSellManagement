import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import Button from "./../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import { HomeWrapper } from "./HomePage.style";
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
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
}
