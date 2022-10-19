import React from 'react';
import { Box, Container } from './styles';
import HeaderCard from '../headerCard/headerCard';
import Description from '../descriptions/description';
import FooterCard from '../cardFooter/cardFooter';

const CardBox = () => {
  return (
    <Container>
      <Box>
        <HeaderCard />
        <Description />
        <FooterCard />
      </Box>
    </Container>
  );
}

export default CardBox
