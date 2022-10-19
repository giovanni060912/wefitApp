import styled from 'styled-components/native';
import Colors from '../../styles/color';
import Fonts from '../../styles/font';

export const Container = styled.View`
display: flex;
justify-content:center;
flex-direction: row;
align-items: center;
gap: 10px;
width: 95%;
height: 42px;
background-color: ${Colors.background};
border-radius: 4px;
`;

export const Label = styled.Text`
font-family:${Fonts.regular};
font-family:regular;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color: ${Colors.save};
`;
