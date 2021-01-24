import React from 'react'
import Layout from '../components/Layout'
import CardContainer from '../components/CardContainer'
import StudentCard from '../components/Dashboard/StudentCard'
import { Container } from 'semantic-ui-react'

const students = [
  {
    _id: '600cb6257b63dccb764331f9',
    sessions: [],
    books: [],
    languagesSpoken: [],
    firstName: 'first',
    lastName: 'last',
    readingLevel: 'lvl',
    grade: 'g',
    joinDate: '2020-12-12T05:00:00.000Z',
    school: 'School',
    createdAt: '2021-01-23T23:49:57.430Z',
    updatedAt: '2021-01-23T23:49:57.430Z',
    __v: 0,
  },
  {
    _id: '600cb725c7c24fcb9f94074f',
    sessions: [],
    books: [],
    languagesSpoken: [],
    firstName: 'Sisi',
    lastName: 'Yu',
    readingLevel: 'Beginner',
    grade: 'Sophomore',
    joinDate: '1995-06-18T04:00:00.000Z',
    school: 'Cornell',
    createdAt: '2021-01-23T23:54:13.808Z',
    updatedAt: '2021-01-23T23:54:13.808Z',
    __v: 0,
  },
]

const Dashboard = () => {
  const cards = students.map((student) => {
    return <StudentCard student={student} key={student._id}></StudentCard>
  })

  return (
    <>
      <Layout>
        <div style={{ height: '100%' }}>
          <h2>Dashboard</h2>
          <CardContainer
            title={'List of participating students'}
            cards={cards}
          ></CardContainer>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard
