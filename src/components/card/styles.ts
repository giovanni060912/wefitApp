import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
align-items: center;
width: 100%;
padding-top:15px;
`;

export const Box = styled.View`
display: flex;
align-items: center;
width: 95%;
padding: 8px 16px;
background-color:${Colors.background};
box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
`;
