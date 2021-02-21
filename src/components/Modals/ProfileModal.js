import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, Checkbox } from 'semantic-ui-react'

import {useDispatch} from 'react-redux'
import * as ambassadorActions from '../../store/ambassadors/actions'
import * as studentActions from '../../store/students/actions'

function ProfileModal() {
  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [grade, setGrade] = useState('')
  const [isActive, setIsActive] = useState('')
  const dispatch = useDispatch()

  let role = "student"

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

const roleToHeader = {
    student: "Student Profile",
    ambassador: "Ambassador Profile",
    teacher: "Teacher Profile",
}

function handleSave() {
    if (role === 'ambassador') {
        // dispatch(ambassadorActions.createAmbassador({
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     languagesSpoken: ["english", "chinese"],
        //     assignedStudents: ["timmy"],
        //     isActive: true
        // }))
    } else if (role === 'student'){ 
        // dispatch(studentActions.createStudent({
        //     firstName: firstName,
        //     lastName: lastName,
        //     grade: grade,
        //     joinDate: joinDate,
        //     languagesSpoken: [],
        //     assignedTeacher: [],
        //     assignedAmbassador: [],
        //     isActive: isActive
        // }))
    }
}


return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
        >
            <Modal.Header>{roleToHeader[role]}</Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Group>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </Form.Field>
                </Form.Group>

                <div>
                    {role == 'student' || role == 'teacher'  ?
                        <Form>
                            <Form.Select
                            fluid label='Grade'
                            languagesSpoken={languagesSpoken}
                            />
                            <Form.Field>
                                <label>Join Date</label>
                                <input placeholder='timestamp' />
                            </Form.Field>
                        </Form>
                    : null}
                </div>

                <div>
                    {role =='ambassador' ? 
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='automatically populates/not editable' value={email} readOnly/>
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

            <Checkbox label='Is Active?' toggle value={isActive} />

            </Modal.Content>
            <Modal.Actions>
            <Button onClick={() => setOpen(false)}>
                Cancel
                </Button>
                <Button onClick={handleSave}>
                Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
  
}

export default ProfileModal