import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { connect } from "react-redux";
import "./Cart.styles.scss";
import  CheckoutItem  from "../../Components/checkout-item/checkout-item.component";
const Cart = ({ cartItems, total }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => <CheckoutItem key={cartItem._id} cartItem={cartItem} />)}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
      </div>
    );
  }
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  total: cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  ),
});
export default connect(mapStateToProps)(Cart);
