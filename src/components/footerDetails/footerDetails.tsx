import React from 'react';
import ButtonFav from '../buttonFavoritesDetails/favoitesDetails';
import ButtonLink from '../buttonLink/buttonLink';
import { Container } from './styles';

const FooterDetails = () => {
  return (
    <Container>
      <ButtonLink />
      <ButtonFav />
    </Container>
  );
}

export default FooterDetails
