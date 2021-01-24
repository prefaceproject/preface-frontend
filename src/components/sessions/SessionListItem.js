/* eslint-disable prettier/prettier */
import React from 'react'
import { List } from 'semantic-ui-react'

const sessionInfo = {
  book: 'The Cat in the Hat',
  student: 'Antonio',
  user: 'Michael',
  notes: 'This is a note',
  dateOfSession: new Date(),
}

const SessionListItem = () => {
  return (
    <List.Item>
      <List.Content>{sessionInfo.book}</List.Content>
    </List.Item>
  )
}

export default SessionListItem
