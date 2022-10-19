import React from 'react';
import { Container, Label } from './styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../styles/color';

const ButtonFav = () => {
  return (
    <Container>
      <Label>Favoritar</Label>
      <AntDesign name="star" size={20} color={`${Colors.black}`} />
    </Container>
  );
}

export default ButtonFav
