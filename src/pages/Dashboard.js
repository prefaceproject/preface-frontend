import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import ModalTemplate from "../components/Modal/ModalTemplate";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import StudentCard from "../components/Dashboard/StudentCard";
import * as userActions from "../store/user/actions";
import * as studentsActions from "../store/students/actions";
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

const Dashboard = ({}) => {
  const [modelOpen, setModelOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  // const ambassadorList = useSelector(userSelectors.getAllAmbassadors);

  useEffect(() => {
    dispatch(userActions.fetchAllAmbassadors({ role: "ambassador" }));
    dispatch(userActions.fetchAllTeachers({ role: "teacher" }));
    dispatch(studentsActions.fetchAllStudents());

    // dispatch(userActions.initializeAmbassador({ user: {email: "f37@gmail.com", role: "ambassador"} }))
    // dispatch(userActions.initializeTeacher({ user: {email: "f40@gmail.com", role: "teacher"} }))
    // dispatch(studentsActions.createStudent({
    //   "firstName": "kid5",
    //   "lastName": "cudi",
    //   "readingLevel": "3",
    //   "grade": "1",
    //   "joinDate": "2020-12-12T05:00:00.000Z",
    //   "school": "red elementary"
    // }))

    // dispatch(userActions.updateAmbassador({ user: { _id: "601c7f8e2663b6786ebace74", email: "f37@gmail.com", role: "ambassador", firstName: "Francis", lastName: "Kigawa"} }))
    // dispatch(userActions.updateTeacher({ user: { _id: "601c81633dff3f7957ea60c2", email: "f40@gmail.com", role: "teacher", firstName: "Mr.", lastName: "Teacher"} }))
    // dispatch(studentsActions.updateStudent({
    //   "_id": "601c8bd0015214844c066720",
    //   "firstName": "kid3",
    //   "lastName": "cudi",
    //   "readingLevel": "10",
    //   "grade": "1",
    //   "joinDate": "2020-12-12T05:00:00.000Z",
    //   "school": "red elementary"
    // }))
  }, []);

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
