import React, { useState, useEffect, useCallback } from 'react';
import { Image, Text } from 'react-native';
import { Container } from './styles';
import api from '../../service/api';

const HeaderCard = () => {
  const [user, setUser] = useState([]);

  const getData = useCallback(async () => {
    await api
      .get("/users/appswefit")
      .then(async function (response: any) {
        setUser(response.data.login);
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
      <Text>{user}</Text>
      <Image
        source={require('../../../assets/ic_Icon.png')}
        style={{ width: 24, height: 24 }}
      />
    </Container>
  );
}

export default HeaderCard
