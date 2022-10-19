import React, { useState, useEffect, useCallback } from 'react';
import { Container, Stacks, Stars } from './styles';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Text } from 'react-native';
import Colors from '../../styles/color';
import api from '../../service/api';

const FooterCard = () => {
  const [star, setStar] = useState([]);

  const getData = useCallback(async () => {
    await api
      .get("/users/appswefit")
      .then(async function (response: any) {
        setStar(response.data.followers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getData();
  })

  return (
    <Container>
      <Stars>
        <AntDesign name="star" size={17} color={`${Colors.favoriteStar}`} />
        <Text>{star}</Text>
      </Stars>
      <Stacks>
        <Entypo name="controller-record" size={8} color={`${Colors.lang}`} />
        <Text>Node</Text>
      </Stacks>
    </Container>
  );
}

export default FooterCard
