import React, { useState, useEffect, useCallback } from "react";

import { Button, Container } from "semantic-ui-react";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import StudentCard from "../components/Dashboard/StudentCard";
import SessionPageHeader from "../components/SessionsPageHeader";
import ModalTemplate from "../components/Modal/ModalTemplate";
import HelpModal from "../components/Modals/HelpModal"

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../store/user/actions";
import * as studentsActions from "../store/students/actions";
import * as userSelectors from "../store/user/selectors";

import "./styles/Dashboard.css";

const students_eg = [
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

const Dashboard = ({ students }) => {
  const [modelOpen, setModelOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  // const ambassadorList = useSelector(userSelectors.getAllAmbassadors);

  useEffect(() => {
      dispatch(userActions.fetchAllAmbassadors());
      dispatch(userActions.fetchAllTeachers());

      console.log("in useeffect", user._id)
      dispatch(studentsActions.fetchAllStudents({_id: user._id}));
  }, []);

  const closeModal = () => {
    setModelOpen(false);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  const cards = students.map((student) => {
    return <StudentCard student={student} key={student._id}></StudentCard>;
  });

  {
    /* <Button
          content="Click Me"
          onClick={() => {
            setModelOpen(true);
          }}

          <ModalTemplate open={modelOpen} closeModal={closeModal}></ModalTemplate>
        ></Button> */
  }

  return (
    <>
      <Layout>
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-header-title">
              Welcome {user ? <u>{user.firstName}</u> : null}!
            </h1>
            <Button primary onClick={() => setIsHelpModalOpen(true)}>Need Help?</Button>
          </div>
          <CardContainer
            title={"List of participating students"}
            cards={cards}
            cardsPerPage={10}
          />
        </Container>
      </Layout>
      <HelpModal 
          isOpen={isHelpModalOpen} 
          close={closeHelpModal} 
          category="help"
        />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
  students: state.students.studentList,
});

export default connect(mapStateToProps)(Dashboard);
