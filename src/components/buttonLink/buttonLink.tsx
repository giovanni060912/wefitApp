import React from 'react';
import { Container, Label } from './styles';
import { Feather } from '@expo/vector-icons';
import Colors from '../../styles/color';

const ButtonLink = () => {
  return (
    <Container>
      <Label>Ver repositório</Label>
      <Feather name="link-2" size={20} color={`${Colors.save}`} />
    </Container>
  );
}

export default ButtonLink
