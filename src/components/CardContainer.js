import React from 'react'
import { Container, Card } from 'semantic-ui-react'

const CardContainer = ({ cards, title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <Card.Group> {cards}</Card.Group>
    </Container>
  )
}

export default CardContainer
