import React, { useState, useEffect } from 'react'
import { Button, Form, Header, Image, Modal, Checkbox, Dropdown } from 'semantic-ui-react'

import {useDispatch, useSelector} from 'react-redux'
import * as userActions from "../../store/user/actions";
import * as studentsActions from "../../store/students/actions";
import * as userSelectors from "../../store/user/selectors";
import * as studentsSelectors from "../../store/students/selectors";
import TeacherCard from "../Dashboard/TeacherCard";
import AmbassadorCard from "../Dashboard/AmbassadorCard";
import StudentCard from "../Dashboard/StudentCard";

function UpdateStudentModal({profile}) {

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

    useEffect(() => {
        console.log(profile)
    }, []);

    const [open, setOpen] = useState(false)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [readingLevel, setReadingLevel] = useState(profile.readingLevel)
    const [languagesSpoken, setLanguagesSpoken] = useState(profile.languagesSpoken)
    const [grade, setGrade] = useState(profile.grade)
    const [school, setSchool] = useState(profile.school)
    const dispatch = useDispatch()

    const user = useSelector(userSelectors.getUser);

    function handleSave() {
        dispatch(studentsActions.updateStudent({
            student: {
                firstName: firstName,
                lastName: lastName,
                readingLevel: readingLevel,
                grade: grade,
                school: school,
                languagesSpoken: languagesSpoken,
                _id: profile._id
            },
            user: user._id
        }))        
        setOpen(false)
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
            trigger={<Button>Edit Student</Button>}
        >
        <Modal.Header>Update Student Profile</Modal.Header>
        <Modal.Content>
        <Form>
            <Form.Field>
                <label>First Name</label>
                <input value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Reading Level</label>
                <input value={readingLevel} onChange={(event) => setReadingLevel(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Grade</label>
                <input value={grade} onChange={(event) => setGrade(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>School</label>
                <input value={school} onChange={(event) => setSchool(event.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Languages Spoken</label>
                <Dropdown onChange={handleLanguagesSpoken.bind(this)} fluid multiple selection options={languagesSpokenOptions} defaultValue={languagesSpoken} />
            </Form.Field>
        </Form>
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

export default UpdateStudentModal