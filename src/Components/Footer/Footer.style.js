import styled from "styled-components";
import { MDBCol } from "mdbreact";

export const MDBColStyled = styled(MDBCol)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    justify-content: space-around;
  }
`;
