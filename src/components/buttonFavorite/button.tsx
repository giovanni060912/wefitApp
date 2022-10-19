import React from 'react';
import { Container, Label } from './styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../styles/color';

const Button = () => {
  return (
    <Container>
      <AntDesign name="star" size={17} color={`${Colors.favoriteStar}`} />
      <Label>Favoritar</Label>
    </Container>
  );
}

export default Button
