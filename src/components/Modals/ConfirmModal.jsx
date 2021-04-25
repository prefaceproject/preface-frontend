import React, { useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  header,
  text,
  confirmButtonText,
  rejectButtonText,
}) => {
  return (
    <Modal closeOnEscape closeOnDimmerClick open={isOpen} onClose={onClose}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} negative>
          {rejectButtonText || "No"}
        </Button>
        <Button onClick={onConfirm} positive>
          {confirmButtonText || "Yes"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmModal;
