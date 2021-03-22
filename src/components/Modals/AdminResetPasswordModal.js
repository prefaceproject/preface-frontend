import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

import "./AdminResetPasswordModal.css";

const AdminResetPasswordModal = ({isOpen, close, user}) => {
  const [confirmReset, setConfirmReset] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const closeModal = () => {
    setConfirmReset(false);
    close();
  }

  const generatePassword = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const resetPassword = () => {
    setConfirmReset(true);
    // ADD REQUEST TO UPDATE PASSWORD
    setNewPassword(generatePassword(8));
  }

  return (
    <Modal onClose={closeModal} open={isOpen} size="tiny">
      <Modal.Header>Reset Password</Modal.Header>
      <Modal.Content>
        {confirmReset ? 
        <div className="form-content">
            <div>
              Below is the new password for {user.firstName} {user.lastName}. Their old password will no longer work. Send them this temporary password, and have them change their password to something new. 
            </div>
            <div className="new-password">
              {newPassword}
            </div>
            <div className="password-note">
              Note: You will not be able to see this temporary password again after closing this dialog.
            </div>
        </div> : 
        <div className="form-content">
          <div className="reset-content">
            Are you sure you want to reset this user's password? If you reset their password, they will no longer be able to gain access with their current password. 
          </div>
          <Button 
            className="reset-button"
            color="red"
            onClick={() => resetPassword()}>
            Reset Password
          </Button>
        </div>}
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={closeModal}>Done</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AdminResetPasswordModal;