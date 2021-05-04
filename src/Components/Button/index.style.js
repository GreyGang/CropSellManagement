import styled from 'styled-components';

export const StyledButton = styled.button`
background-color: black; 
color : white;
border: 1px solid white;
border-radius: 100px;
padding : 1rem;
font-size: 1.2rem;
transition : 0.5s;
cursor : pointer;
margin : 0.4rem;
font-weight : bold;
 &:hover{
    color : white;
    transform : scale(1.08);
}
&:active{
    transform : translateY(6px);
}
`;
