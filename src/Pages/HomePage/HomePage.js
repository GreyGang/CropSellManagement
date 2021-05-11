import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { HomeWrapper } from "./HomePage.style";
import Carousel from "./Section/Carousel/Carousel";
import Quote from "./Section/Quote/Quote";
import ShopNow from '../HomePage/Section/ShopNow/ShopNow';

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
        <Carousel />
        <Quote />
        <ShopNow />
      </HomeWrapper>
    );
  }
}
