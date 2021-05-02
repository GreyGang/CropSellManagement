import React from "react";
import { NavbarWrapper, UlWrapper } from "./index.style";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <UlWrapper>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="login">
          <li>Logout</li>
        </Link>
      </UlWrapper>
    </NavbarWrapper>
  );
}
