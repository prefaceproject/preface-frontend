import React, { useEffect, useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../../store/user/actions";
import * as userSelectors from "../../store/user/selectors";

import "./ChangePasswordModal.css";

const ChangePasswordModal = ({isOpen, close}) => {
  const dispatch = useDispatch();
  const { email } = useSelector(userSelectors.getUser);
  const passwordError = useSelector(userSelectors.getPasswordError);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (newPassword && currentPassword === newPassword) {
      setError("New password must be different from your current password")
    } else if (confirmPassword && newPassword !== confirmPassword) {
      setError("Passwords do not match")
    } else {
      setError("")
    }
  }, [newPassword, newPassword, confirmPassword])

  useEffect(() => {
    if (passwordError && passwordError.success) {
      setStatus(passwordError)
      close();
    } else if (
      passwordError && 
      !passwordError.success && 
      password.message !== "Incorrect password entered") {
        setStatus(passwordError)
        close();
    } else if (
      passwordError && 
      !passwordError.success &&
      passwordError.message === "Incorrect password entered") {
        setError(passwordError.message)
    }
  }, passwordError)

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: currentPassword,
      newPassword: newPassword
    }
    dispatch(userActions.changePassword(payload));
  }

  return (
    <Modal onClose={close} open={isOpen} size="tiny">
      <Modal.Header>Change Password</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Current Password</label>
            <input 
              // type="password" 
              placeholder="Current Password" 
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>New Password</label>
            <input
              // type="password"
              placeholder="New Password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input 
              // type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Field>
          <div className="error">
            {error}
          </div>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={close}>Cancel</Button>
        <Button 
          primary 
          disabled={!!error || !currentPassword || !newPassword || !confirmPassword} 
          onClick={() => handleSubmit()}>
          Update Password
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ChangePasswordModal;