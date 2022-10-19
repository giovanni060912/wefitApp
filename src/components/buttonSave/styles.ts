import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 45%;
height: 42px;
background: ${Colors.save};
border-radius: 4px;
`;

export const Label = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 26px;
letter-spacing: 0.46px;
text-transform: uppercase;
color: ${Colors.background};
`;
