import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { CartWrapper } from "./Cart.style";
export default function Cart() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <CartWrapper>
        <div>
          <h1>Welcome to cart</h1>
        </div>
      </CartWrapper>
    );
  }
}
