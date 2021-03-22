import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux"

import * as userActions from "../../store/user/actions";
import * as userSelectors from "../../store/user/selectors";

import "./AdminResetPasswordModal.css";

const AdminResetPasswordModal = ({isOpen, close, user}) => {
  const dispatch = useDispatch();
  const { email } = useSelector(userSelectors.getUser);
  const resetPasswordError = useSelector(userSelectors.getResetPasswordError);

  const [confirmReset, setConfirmReset] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (resetPasswordError && resetPasswordError.success) {
      setIsLoading(false);
      setConfirmReset(true);
    } else if (resetPasswordError && !resetPasswordError.success) {
      setIsLoading(false);
      setError("There was an error resetting the password. Try again later.")
    }
  }, [resetPasswordError])

  const closeModal = () => {
    setConfirmReset(false);
    setError('');
    setIsLoading(false);
    setNewPassword('');
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
    const newPassword = generatePassword(8);
    const payload = {
      user: {
        email: user.email,
        newPassword: newPassword
      },
      adminUser: {
        email: email
      }
    }
    dispatch(userActions.resetPassword(payload));
    setNewPassword(newPassword);
    setIsLoading(true);
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
            loading={isLoading}
            onClick={() => resetPassword()}>
            Reset Password
          </Button>
          <div className="error-content">
            {error}
          </div>
        </div>}
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={closeModal}>Done</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AdminResetPasswordModal;