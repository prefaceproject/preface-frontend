import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, Checkbox, Dropdown } from 'semantic-ui-react'

import {useDispatch, useSelector} from 'react-redux'
import * as userActions from "../../store/user/actions";
import * as studentsActions from "../../store/students/actions";
import * as userSelectors from "../../store/user/selectors";
import * as studentsSelectors from "../../store/students/selectors";

function CreateTeacherModal({students}) {

    const languagesSpokenOptions = [
    { key: 'English', value: 'English', text: 'English' },
    { key: 'French', value: 'French', text: 'French' },
    { key: 'Spanish', value: 'Spanish', text: 'Spanish' },
    { key: 'German', value: 'German', text: 'German' },
    { key: 'Italian', value: 'Italian', text: 'Italian' },
    { key: 'Greek', value: 'Greek', text: 'Greek' },
    { key: 'Mandarin', value: 'Mandarin', text: 'Mandarin' },
    { key: 'Japanese', value: 'Japanese', text: 'Japanese' }
    ]

    const [open, setOpen] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [languagesSpoken, setLanguagesSpoken] = useState([])
    const [assignedStudents, setAssignedStudents] = useState([])
    const [isActive, setIsActive] = useState(true)
    const dispatch = useDispatch()

    const user = useSelector(userSelectors.getUser);

    const assignedStudentsOptions = formatStudents()

    function formatStudents() {
        var studentList = [];
        students.map((student) => {
            studentList.push({ key: student._id, value: student._id, text: student.firstName + " " + student.lastName })
        });

        console.log("studentList", studentList)

        return studentList
    }

    function handleSave() {
        dispatch(userActions.initializeTeacher({ 
            user: {
                role: "teacher", 
                email: email, 
                students: assignedStudents,
                isActive: isActive
            } 
        }))        
        setOpen(false)
        setEmail('')
        setLanguagesSpoken([])
        setAssignedStudents([])
        setIsActive(true)
    }

    const handleLanguagesSpoken = (e, {value}) => {
        console.log(value)
        setLanguagesSpoken(value)
    }

    const handleAssignedStudents = (e, {value}) => {
        console.log(value)
        setAssignedStudents(value)
    }

    function handleClick() {
        setIsActive(!isActive)
    }

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button primary>Create New Teacher</Button>}
        >
        <Modal.Header>Create New Teacher Profile</Modal.Header>
        <Modal.Content>
        <Form>
            {/*<Form.Field>
                <label>First Name</label>
                <input value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </Form.Field>*/}
            <Form.Field>
                <label>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
            </Form.Field>
            {/*<Form.Field>
                <label>Languages Spoken</label>
                <Dropdown onChange={handleLanguagesSpoken.bind(this)} fluid multiple selection options={languagesSpokenOptions} />
            </Form.Field>*/}
            <Form.Field>
                <label>Assigned Students</label>
                <Dropdown 
                    onChange={handleAssignedStudents.bind(this)} 
                    fluid 
                    multiple 
                    selection 
                    options={assignedStudentsOptions} 
                />
            </Form.Field>
            <Button toggle active={isActive} onClick={handleClick}>
                Is Active
            </Button>
        </Form>
        </Modal.Content>
        
        <Modal.Actions>
            <Button onClick={() => setOpen(false)}>
                Cancel
            </Button>
            <Button color="blue" onClick={handleSave} disabled={!email}>
                Save
            </Button>
        </Modal.Actions>
        </Modal>
    )
}

export default CreateTeacherModal