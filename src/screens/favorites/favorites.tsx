import React from 'react';
import CardFavorites from '../../components/cardFavorites/cardFavorites';
import Header from '../../components/header/header';
import { Container } from './styles';



const Favorites = () => {
  return (
    <Container>
      <Header />
      <CardFavorites />
    </Container>
  );
}

export default Favorites;
