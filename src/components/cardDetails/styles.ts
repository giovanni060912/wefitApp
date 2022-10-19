import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
width:100%;
  background-color:${Colors.background};
`;

export const Stacks = styled.View`
display:flex;
flex-direction:row;
align-items: center;
margin-top:10px
`;

export const Box = styled.View`
display:flex;
padding:16px;
`;
