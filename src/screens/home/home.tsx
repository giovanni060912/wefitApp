import React from 'react';
import CardBox from '../../components/card/card';
import Header from '../../components/header/header';
import { Container } from './styles';



const Home = () => {
  return (
    <Container>
      <Header />
      <CardBox />
    </Container>
  );
}

export default Home
