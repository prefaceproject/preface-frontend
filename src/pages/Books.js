import React, { useState, useEffect, useCallback } from 'react'
import { connect, useDispatch, useSelector } from "react-redux";
import * as bookSelectors from "../store/books/selectors";
import * as bookActions from "../store/books/actions";
import { backend_url } from '../constants/url';
import { delay } from 'redux-saga/effects';

import Layout from "../components/Layout";
import { Button } from "semantic-ui-react";
import CardContainer from "../components/CardContainer";
import StudentCard from "../components/Dashboard/StudentCard";
import SessionPageHeader from "../components/SessionsPageHeader";
import ModalTemplate from "../components/Modal/ModalTemplate";
import * as userSelectors from "../store/user/selectors";

const students = [
    {
      _id: "600cb6257b63dccb764331f9",
      sessions: [],
      books: [],
      languagesSpoken: [],
      firstName: "first",
      lastName: "last",
      readingLevel: "lvl",
      grade: "g",
      joinDate: "2020-12-12T05:00:00.000Z",
      school: "School",
      createdAt: "2021-01-23T23:49:57.430Z",
      updatedAt: "2021-01-23T23:49:57.430Z",
      __v: 0,
    },
    {
      _id: "600cb725c7c24fcb9f94074f",
      sessions: [],
      books: [],
      languagesSpoken: [],
      firstName: "Sisi",
      lastName: "Yu",
      readingLevel: "Beginner",
      grade: "Sophomore",
      joinDate: "1995-06-18T04:00:00.000Z",
      school: "Cornell",
      createdAt: "2021-01-23T23:54:13.808Z",
      updatedAt: "2021-01-23T23:54:13.808Z",
      __v: 0,
    },
  ];
  
const Dashboard = ({  }) => {
    const [modelOpen, setModelOpen] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(userSelectors.getUser);
  
    useEffect(() => {
      dispatch(bookActions.fetchAllBooks())
    }, [])
  
  
    const closeModal = () => {
      setModelOpen(false);
    };
  
    const cards = students.map((student) => {
      return <StudentCard student={student} key={student._id}></StudentCard>;
    });
  
    return (
      <>
        <Layout>
          <div style={{ height: "100%", paddingTop: "24px" }}>
            <SessionPageHeader></SessionPageHeader>
            <h1>{`Welcome${user ? ` ${user.firstName}` : ""}`}</h1>
            <CardContainer
              title={"List of participating students"}
              cards={cards}
            />
          </div>
          <Button
            content="Click Me"
            onClick={() => {
              setModelOpen(true);
            }}
          ></Button>
  
          <ModalTemplate open={modelOpen} closeModal={closeModal}></ModalTemplate>
        </Layout>
      </>
    );
  };
  
  const mapStateToProps = (state) => ({
    user: state.user.data,
  });
  
  export default connect(mapStateToProps)(Dashboard);
