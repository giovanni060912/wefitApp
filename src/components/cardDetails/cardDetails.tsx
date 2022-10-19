import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import { Container, Stacks, Box } from './styles';
import api from '../../service/api';
import { Entypo } from '@expo/vector-icons';
import Description from '../descriptions/description';
import Colors from '../../styles/color';

const DetailsCard = () => {
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
      <Box>
        <Text>{user}</Text>
        <Description />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce porta magna sit amet ante faucibus sodales. Ut tempor massa risus,
          vel consectetur diam efficitur in. Suspendisse ut enim augue.
          Donec ullamcorper odio in tellus feugiat venenatis.
          Phasellus eleifend nisl neque, a pulvinar nisl mattis ac.
          Phasellus vitae velit eu dui tempus ullamcorper eget ut metus.
          Proin vestibulum sodales justo, vitae iaculis ipsum volutpat a.
          Nam vel leo vitae leo volutpat varius.
        </Text>
        <Stacks>
          <Entypo name="controller-record" size={8} color={`${Colors.lang}`} />
          <Text>Node</Text>
        </Stacks>
      </Box>
    </Container>
  );
}

export default DetailsCard;
