import styled from 'styled-components/native';
import Colors from '../../styles/color';
import Fonts from '../../styles/font';

export const Container = styled.View`
display: flex;
justify-content:center;
flex-direction: row;
align-items: center;
width:100%;
height: 42px;
background-color: ${Colors.background};
border-radius: 4px;
`;

export const Label = styled.Text`
font-family:${Fonts.regular};
font-family:regular;
font-style: normal;
font-weight: 700;
margin-right:10px;
font-size: 15px;
line-height: 15px;
color: ${Colors.save};
`;
