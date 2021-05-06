import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: black;
  outline: none;
  color: white;
  border: 1px solid white;
  border-radius: 100px;
  padding: 1rem;
  font-size: 1.2rem;
  transition: 0.5s;
  cursor: pointer;
  margin: 0.4rem;
  &:hover {
    color: black;
    transform: scale(1.08);
    background-color: white;
    border: 1px solid black;
    box-shadow: 0 2px 10px grey, 2px 0 10px grey, 1px 0 20px lightgrey;
    font-weight: bold;
  }
  &:active {
    transform: translateY(6px);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
