import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
height: 56px;
background-color:${Colors.black} ;
`;

export const Title = styled.Text`
font-family: 'Roboto';
font-style: normal;
margin-left:16px;
font-weight: 500;
font-size: 20px;
letter-spacing: 0.15px;
color: rgba(255, 255, 255, 0.87);
`;




