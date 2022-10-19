import styled from 'styled-components/native';
import Colors from '../../styles/color';

export const Box = styled.View`
display:flex;
width: 100%;
padding-top:16px;
justify-content: center;
align-items: center;
`;

export const Container = styled.View`
flex:1;
display: flex;
justify-content: flex-end;
background: rgba(0, 0, 0, 0.5);
`;

export const LabelModal = styled.Text`
width: 100%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding-top:16px;
letter-spacing: 0.15px;
padding-left:16px;
color: rgba(0, 0, 0, 0.87);
`;

export const ModalCard = styled.View`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background: ${Colors.background};
border-radius:4px;
`;

export const Puller = styled.View`
width: 30px;
height: 6px;
background-color:${Colors.puller};
border-radius: 12px;
flex: none;
`;

export const BoxButtons = styled.View`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
align-items: center;
margin-top:10px;
`;
