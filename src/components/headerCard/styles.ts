import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Container = styled.View`
display: flex;
align-items: center;
flex-direction:row;
justify-content:space-between;
padding:6px;
width: 100%;
background-color:${Colors.background} ;
border-bottom-width:1px;
border-bottom-color:${Colors.border};
`;

export const Box = styled.View`
width:95%
display: flex;
align-items: center;
flex-direction:row;
justify-content:space-between;
border-bottom-width:1px;
border-bottom-color:${Colors.border};
`;

