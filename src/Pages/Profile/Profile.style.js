import styled from "styled-components";
export const ProfileContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 150px;
  text-align: center;
`;
export const Image = styled.img`
  margin-top: -20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 9999;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  @media screen and (max-width: 1024px) {
    margin-top: -11%;
  }
`;
export const ContainerInfo = styled.div`
  width: 100%;
  padding-top: 25px;
  background-color: #fff;
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    top: 40%;
  }
`;

export const Info = styled.h2`
  font-weight: bolder;
  margin-bottom: 50px;
`;

export const ProfileColumn = styled.div`
  background-color: #fff;
  width: 100%;
  text-align: center;
  justify-content: center;
`;
export const ProfileWrapper = styled.div`
  margin-bottom: 50px;
  padding: 0;
  display: grid;
  grid-template-columns: 30% 70%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;
export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
