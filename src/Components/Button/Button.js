import React from "react";
import { StyledButton } from "./Button.style";
import { Alert } from "../Alert/Alert";

function Button({ children, onClick }) {
  const check = () => {
    if (onClick) {
      Alert();
    }
  };
  return <StyledButton onClick={check}>{children}</StyledButton>;
}
export default Button;
