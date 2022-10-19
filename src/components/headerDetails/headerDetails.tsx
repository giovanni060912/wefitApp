import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Title } from './style';

const HeaderDetails = () => {
  return (
    <Container >
      <Ionicons name="arrow-back" size={24} style={{ marginLeft: 16 }} color="#FFF" />
      <Title >Detalhes</Title>
    </Container>
  );
}
export default HeaderDetails;
