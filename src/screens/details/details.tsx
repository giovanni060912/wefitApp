import React from 'react';
import { Container, Box, Cards } from './styles';
import DetailsCard from '../../components/cardDetails/cardDetails';
import FooterDetails from '../../components/footerDetails/footerDetails';
import HeaderDetails from '../../components/headerDetails/headerDetails';

const Details = () => {
  return (
    <Container>
      <Cards>
        <HeaderDetails />
        <DetailsCard />
      </Cards>
      <Box>
        <FooterDetails />
      </Box>
    </Container>
  );
}

export default Details
