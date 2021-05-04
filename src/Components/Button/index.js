import React from 'react';
import { StyledButton } from "./index.style";

function Button({children}) {
  return (
    <StyledButton>{children}</StyledButton> 
  );
}
export default Button;
