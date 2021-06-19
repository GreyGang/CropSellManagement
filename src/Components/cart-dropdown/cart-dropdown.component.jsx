import React from "react";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { StyledButton } from "../Button/Button.style";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../Reducers/cart/cart.actions";
import "./cart-dropdown.styles.scss";
const CartDropdown = ({ cartItems,history,dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem._id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <StyledButton
        style={{
          height: "55px",
        }}
        onClick={() => {
            history.push("/cart")
            dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </StyledButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
