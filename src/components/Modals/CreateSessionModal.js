import React from 'react'
import { Button, Header, Form, Modal, Radio, TextArea, Dropdown } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


const CreateSessionModal = (props) => {
  const [open, setOpen] = React.useState(false)
  const [expandBook, setExpandBook] = React.useState(false)
  const [currentDate, setNewDate] = React.useState(null)

  const addNewBook = () => setExpandBook(!expandBook)
  const saveNewBook = () => setExpandBook(false)
  const selectDate = (event, data) => setNewDate(data.value)

  
  const options = [
    { key: 'm', text: 'Male', value: 'male' }
  ]

  const AddBook = () => (
    <div> 
      <Form.Group widths='equal'>
        <Form.Input fluid label='Book Name' placeholder='Book Name' />
        <Form.Input fluid label='Book Author' placeholder='Book Author' />
      </Form.Group>
      <Form.Group widths='equal'> 
        <Form.Input fluid label='Book Language' placeholder='Book Language' />
        <Form.Input fluid label='Book Reading Level' placeholder='Book Reading Level' />
      </Form.Group>
      <Button onClick={saveNewBook}>
          Save
      </Button>
      
    </div>
  )

  //props.viewOnly

  

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>New Session</Modal.Header>
        <Modal.Content>
          {/* { props.viewOnly ? ViewSessionDetails : CreateSessionForm } */}
          <Form>
            <Form.Field>
              <div>Date of Meeting</div>
              <SemanticDatepicker onChange={selectDate} />
            </Form.Field>
            <Form.Select
              fluid label='Book Read'
              options={options}
            />
              <Button onClick={addNewBook}>Add Book</Button>
              { console.log(expandBook)}
              { expandBook ? <AddBook /> : null}            
            <Form.Field>
              <div>Reading Level</div>
              <input placeholder='read from database' readOnly/>
            </Form.Field>
              <Form.Select
              fluid label='Difficulty Level (1 being the easiest and 5 being the hardest)'
              options={options}
            />
            
            <Form.Field>
              <div>Notes</div>
              <TextArea placeholder='Type additional notes here...' />
            </Form.Field>
          </Form>
        </Modal.Content>
        {/* {props.children} */}
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button >
            Save
          </Button>
        
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default CreateSessionModal
