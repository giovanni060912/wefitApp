import React, { useState, useEffect } from 'react';
import { Image, Modal, TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { AntDesign } from '@expo/vector-icons';
import ModalSearch from '../modal/modal';
import Colors from '../../styles/color';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true)
  }
  function closeModal() {
    setModalVisible(false)
  }
  useEffect(() => {

  }, [])

  return (
    <Container>
      <Image
        source={require('../../assets/img/Logo.png')}
      />
      <TouchableOpacity onPress={openModal}>
        <AntDesign name="setting" size={24} ccolor={`${Colors.black}`} />
      </TouchableOpacity>
      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <ModalSearch Cancelar={closeModal} />
      </Modal>
    </Container>
  );
}

export default Header
