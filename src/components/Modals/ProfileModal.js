import React from 'react'
import { Button, Form, Header, Image, Modal, Checkbox } from 'semantic-ui-react'

function ProfileModal() {
  const [open, setOpen] = React.useState(false)

  let role = "teacher"

const languagesSpoken = [
    { key: 'm', text: 'Male', value: 'male' }
]

const assignedTeacher = [
    { key: 'm', text: 'Male', value: 'male' }
]

const assignedAmbassador = [
    { key: 'm', text: 'Male', value: 'male' }
]

const assignedStudent = [
    { key: 'm', text: 'Male', value: 'male' }
]


return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
        >
            {role == 'student' ? 
                <Modal.Header>Student Profile</Modal.Header>
                :
                null}

            {role == 'ambassador' ? 
                <Modal.Header>Ambassador Profile</Modal.Header>
                :
                null}

            {role == 'teacher' ? 
                <Modal.Header>Teacher Profile</Modal.Header>
                :
                null}

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

                <div>
                    {role == 'student' || role == 'teacher'  ?
                        <Form.Group>
                            <Form.Field>
                                Grade
                                <input placeholder='K-12' />
                            </Form.Field>
                            <Form.Field>
                                Join Date
                                <input placeholder='timestamp' />
                            </Form.Field>
                        </Form.Group>
                    : null}
                </div>

                <div>
                    {role =='ambassador' ? 
                        <Form.Field>
                            Email
                            <input placeholder='automatically populates/not editable' readOnly />
                        </Form.Field>
                    : null}
                </div>
                
                <div>
                    {role == 'student' || role == 'ambassador' ?
                        <Form>
                            <Form.Select
                            fluid label='Languages Spoken'
                            languagesSpoken={languagesSpoken}
                        />
                        </Form>
                    :null }
                 </div>

                <div>
                    {role == 'student' ?
                        <Form>
                            <Form.Select
                                fluid label='Assigned Teacher'
                                assignedTeacher={assignedTeacher}
                            />
                            <Form.Select
                                fluid label='Assigned Ambassador'
                                assignedAmbassador={assignedAmbassador}
                            />
                        </Form>
                    : null}
                </div>

                <div>
                    {role == 'ambassador' ?
                        <Form>
                            <Form.Select
                                fluid label='Assigned Students'
                                assignedStudent={assignedStudent}
                            />
                        </Form>
                    : null}
                </div>
                
            </Form>

            <Checkbox label='Is Active?' toggle />

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