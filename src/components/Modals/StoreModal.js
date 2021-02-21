import React, { useState } from 'react'
import { Button, Form, Header, Image, Modal, Checkbox } from 'semantic-ui-react'

import {useDispatch} from 'react-redux'
import * as ambassadorActions from '../../store/ambassadors/actions'

function CreateAmbassadorModal() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    function handleSave() {
        // dispatch(ambassadorActions.createAmbassador({
        //     email: email
        // }))
        setOpen(false)
    }

    return(
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>CreateAmbassadorModal</Button>}
        >
        <Modal.Header>Create New Ambassador Profile</Modal.Header>
        <Modal.Content>
        <Form>
            <Form.Field>
                <label>Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
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

export default CreateAmbassadorModal