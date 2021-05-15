import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { HomeWrapper } from "./HomePage.style";
import Carousel from "./Section/Carousel/Carousel";
import Quote from "./Section/Quote/Quote";
import ShopNow from "../HomePage/Section/ShopNow/ShopNow";
import { connect } from "react-redux";

function HomePage(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(props.auth);
    setLoading(false);
  }, [props]);

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

const statetoprops = (state) => {
  return state;
};

export default connect(statetoprops, null)(HomePage);
