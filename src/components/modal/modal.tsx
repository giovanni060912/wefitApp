import React from 'react';
import ButtonCancel from '../buttonCancel/buttonCancel';
import ButtonSave from '../buttonSave/buttonSave';
import InputModal from '../inputModal/inputModal';
import { Box, Container, LabelModal, ModalCard, Puller, BoxButtons } from './styles';

const ModalSearch = (props: any) => {
  return (
    <Container>
      <ModalCard >
        <Box>
          <Puller />
          <LabelModal>Alterar usuário selecionado</LabelModal>
        </Box>
        <InputModal />
        <BoxButtons>
          <ButtonCancel title="cancelar" onPress={props.Cancelar} />
          <ButtonSave />
        </BoxButtons>
      </ModalCard>
    </Container>
  );
};

export default ModalSearch;
