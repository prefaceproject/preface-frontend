import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

const ModalTemplate = ({
  children,
  open = false,
  closeModal = () => {
    console.log("Close Modal");
  },
}) => {
  return (
    <Modal open={open}>
      <Modal.Header>Header</Modal.Header>
      <Modal.Content>
        Content
        <Modal.Description>Description</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={closeModal}>
          Nope
        </Button>
        <Button color="red" onClick={closeModal}>
          Nope but in red
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalTemplate;
