import React from 'react';
import { Container, Label } from './styles';

const ButtonCancel = ({ onPress, title }: any,) => {
  return (
    <Container onPress={onPress}>
      <Label>{title}</Label>
    </Container>
  );
}

export default ButtonCancel
