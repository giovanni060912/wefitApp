import React from 'react';
import { Text, TextInput } from 'react-native';
import { Container } from './styles';

const InputModal = (props: any) => {
  const [text, onChangeText] = React.useState("");
  return (
    <Container>
      <Text >User Name</Text>
      <TextInput
        onChangeText={onChangeText}
        keyboardType={'email-address'}
        value={text}
        style={{ width: '100%', flex: 1 }}
      />
    </Container>
  );
};

export default InputModal;
