import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
flex:1;
width:100%;
heigth:100%;
background-color:${Colors.primary};
`;

export const Box = styled.View`
display:flex;
width:100%;
padding:10px
align-itens:center;
justify-content:flex-end;
`;

export const Cards = styled.View`
display:flex;
width:100%;
heigth:100%;
`;
