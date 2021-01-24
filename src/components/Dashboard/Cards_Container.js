import React from 'react'
import { Card, Grid, Container } from 'semantic-ui-react'

const CardsContainer = ({ students }) => {
  const cards = students.map((student) => {
    return (
      <Card fluid color="black" key={student._id}>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={1}>Image</Grid.Column>
            <Grid.Column width={3}>
              {student.firstName + ' ' + student.lastName}
            </Grid.Column>
            <Grid.Column width={3}>
              {'Number of Sessions: ' + student.sessions.length}
            </Grid.Column>
            <Grid.Column width={6}>Last Session </Grid.Column>
            <Grid.Column width={3}>Button </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    )
  })

  return <Container>{cards}</Container>
}

export default CardsContainer
