import React from 'react'
import { Card, FeedUser, Icon, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const user = {
  firstName: 'Sam',
  lastName: 'Smith',
  role: 'student',
  grade: '4',
  readingLevel: '5',
  languagesSpoken: '',
  id: "235434",
  books: ['Green Eggs and Ham']
}

const CardDescription = () => {
  const text =
    user.firstName +
    ' is currently reading ' +
    user.books[user.books.length - 1]

  return <Card.Description>{text}</Card.Description>
}

const CardExampleCard = () => { 
  const extra = 'Grade: ' + user.grade + ', Reading Level: ' + user.readingLevel
  const img = 'https://robohash.org/' + user.id + '.png/?set=set4'
   return (
  <Card>
      <Image src={img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>
        {user.firstName} {' ' + user.lastName}
      </Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
        </Card.Meta>
        <CardDescription user={user} />
      </Card.Content>
      <Card.Content extra>
        <a>{extra}</a>
      </Card.Content>
  </Card>
)
}

export default CardExampleCard
