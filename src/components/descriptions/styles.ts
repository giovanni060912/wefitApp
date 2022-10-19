import styled from 'styled-components/native';
import Colors from '../../styles/color';
import Fonts from '../../styles/font';


export const Container = styled.View`
display: flex;
width: 95%;
height:40px;
margin-top:16px;
align-item:center;
`;

export const Info = styled.Text`
font-family:${Fonts.regular};
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: ${Colors.text};
`;
