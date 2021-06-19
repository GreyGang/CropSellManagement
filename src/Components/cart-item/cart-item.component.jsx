import React from "react";
import './cart-item.styles.scss'
const CartItem = ({ item: { img_url, price, quantity, title } }) => (
  <div className="cart-item">
    <img src={img_url} alt="item"></img>
    <div className='item-details'>
        <span className='name'>{title}</span>
    <span className='price'>
        {quantity} x ${price}
    </span>
    </div>
  </div>
);

export default CartItem;
