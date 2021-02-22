import React, { useState, useEffect, useCallback } from "react";

import { Button, Container, Menu } from "semantic-ui-react";
import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import StudentCard from "../components/Dashboard/StudentCard";
import AmbassadorCard from "../components/Dashboard/AmbassadorCard";
import TeacherCard from "../components/Dashboard/TeacherCard";
import SessionPageHeader from "../components/SessionsPageHeader";
import ModalTemplate from "../components/Modal/ModalTemplate";
import HelpModal from "../components/Modals/HelpModal";

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../store/user/actions";
import * as studentsActions from "../store/students/actions";
import * as userSelectors from "../store/user/selectors";

import "./styles/Dashboard.css";

const Dashboard = ({ students, teachers, ambassadors }) => {
  // Global State
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  const { role, firstName } = user;

  useEffect(() => {
    dispatch(userActions.fetchAllAmbassadors());
    dispatch(userActions.fetchAllTeachers());
    dispatch(studentsActions.fetchAllStudents({ _id: user._id }));
  }, []);

  // User Interface State
  const [modelOpen, setModelOpen] = useState(false);
  const [menuState, setMenuState] = useState("Students");
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const onClickMenuItem = (state) => {
    return () => {
      // if (role != "admin") {
      //   setMenuState("Students")
      //   return;
      // }
      setMenuState(state);
    };
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  const getCards = (state) => {
    switch (state) {
      case "Students":
        return [students && students.length > 0 ? students : [], StudentCard];
      case "Ambassadors":
        return [
          ambassadors && ambassadors.length > 0 ? ambassadors : [],
          AmbassadorCard,
        ];
      case "Teachers":
        return [teachers && teachers.length > 0 ? teachers : [], TeacherCard];
      default:
        return [];
    }
  };

  const [deck, Template] = getCards(menuState);

  const cards = deck.map((profile) => {
    return <Template profile={profile} key={profile._id}></Template>;
  });

  return (
    <>
      <Layout>
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-header-title">
              Welcome {user ? <u>{firstName}</u> : null}!
            </h1>
            <Button primary onClick={() => setIsHelpModalOpen(true)}>
              Need Help?
            </Button>
          </div>
          {role === "admin" || role === "ambassador" ? (
            <Menu pointing secondary>
              <Menu.Item
                name="Students"
                active={menuState === "Students"}
                onClick={onClickMenuItem("Students")}
              />
              <Menu.Item
                name="Ambassadors"
                active={menuState === "Ambassadors"}
                onClick={onClickMenuItem("Ambassadors")}
              />
              <Menu.Item
                name="Teachers"
                active={menuState === "Teachers"}
                onClick={onClickMenuItem("Teachers")}
              />
            </Menu>
          ) : null}

          <CardContainer
            title={`List of participating ${menuState.toLowerCase()}`}
            cards={cards}
            cardsPerPage={5}
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
  ambassadors: state.user.ambassadorList,
  teachers: state.user.teacherList,
});

export default connect(mapStateToProps)(Dashboard);
