import React from 'react';
import { Box, Container } from './styles';
import HeaderCard from '../headerCard/headerCard';
import Description from '../descriptions/description';
import FooterCard from '../footerCardFavorites/footerFavorites';

const CardFavorites = () => {
  return (
    <Container>
      <Box>
        <HeaderCard />
        <Description />
        < FooterCard />
      </Box>
    </Container>
  );
}

export default CardFavorites
