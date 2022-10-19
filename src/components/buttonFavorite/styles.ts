import styled from 'styled-components/native';
import Colors from '../../styles/color';
import Fonts from '../../styles/font';

export const Container = styled.View`
display: flex;
justify-content:space-between;
flex-direction: row;
align-items: center;
padding: 8px 10px;
gap: 10px;
width: 103px;
height: 36px;
background-color: ${Colors.favorite};
border-radius: 4px;
flex: none;
flex-grow: 0;
`;

export const Label = styled.Text`
width: 53px;
height: 15px;
font-family:${Fonts.regular};
font-family:regular;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color: ${Colors.favoriteStar};
flex: none;
flex-grow: 0;
`;
