import React from 'react';
import { Container, Label } from './styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../styles/color';

const ButtonDesfav = () => {
  return (
    <Container>
      <Label>Desfavoritar</Label>
      <AntDesign name="star" size={20} color={`${Colors.black}`} />
    </Container>
  );
}

export default ButtonDesfav
