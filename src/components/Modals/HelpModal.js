import React from "react";
import {
  Button,
  Modal,
} from "semantic-ui-react";

import "./HelpModal.css";

const HelpModal = ({
  isOpen,
  close,
  category,
}) => {
  const header = category === "password" ? "Forgot Password" : "Need Help";
  const body = category === "password" 
    ? "To request or change your password, please email "
    : "To request assistance, please email "
  const email = category === "password"
    ? "mailto:support@prefaceproject.org?subject=Password Request"
    : "mailto:support@prefaceproject.org?subject=Help Request"   

  return (
    <Modal onClose={close} open={isOpen} size="tiny">
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        {body} <span className="email">support@prefaceproject.org</span>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={close}>Cancel</Button>
        <Button primary onClick={() => {                
          window.open(email);
          }}
        >
          Email
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default HelpModal;
