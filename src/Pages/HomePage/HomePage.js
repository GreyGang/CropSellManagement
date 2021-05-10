import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { HomeWrapper } from "./HomePage.style";
import Carousel from './../../Components/Carousel/Carousel';

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
          <Carousel/>
      </HomeWrapper>
    );
  }
}
