/* eslint-disable prettier/prettier */
import React from 'react'
import { Button, Form, Header, Image, Modal } from 'semantic-ui-react'

function ProfileModal() {
  const [open, setOpen] = React.useState(false)

const languagesSpoken = [
    { key: 'm', text: 'Male', value: 'male' }
]

const assignedTeacher = [
    { key: 'm', text: 'Male', value: 'male' }
]

const assignedAmbassador = [
    { key: 'm', text: 'Male', value: 'male' }
]

return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>Student Profile</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Group>
                    <Form.Field>
                        First Name
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        Last Name
                        <input placeholder='Last Name' />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field>
                        Grade
                        <input placeholder='K-12' />
                    </Form.Field>
                    <Form.Field>
                        Join Date
                        <input placeholder='timestamp' />
                    </Form.Field>
                    <Form.Select
                        fluid label='Languages Spoken'
                        languagesSpoken={languagesSpoken}
                    />
                    <Form.Select
                        fluid label='Assigned Teacher'
                        assignedTeacher={assignedTeacher}
                    />
                    <Form.Select
                        fluid label='Assigned Ambassador'
                        assignedAmbassador={assignedAmbassador}
                    />
                </Form.Group>
            </Form>

            
            </Modal.Content>
            <Modal.Actions>
            <Button onClick={() => setOpen(false)}>
                Cancel
                </Button>
                <Button >
                Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
  
}

export default ProfileModal