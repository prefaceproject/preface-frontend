<<<<<<< HEAD
// React
import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

=======
import React, { useState, useEffect } from "react";

import { Button, Container, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout";
import CardContainer from "../components/CardContainer";
import StudentCard from "../components/Dashboard/StudentCard";
import CreateAmbassadorModal from "../components/Modals/CreateAmbassadorModal";
import CreateTeacherModal from "../components/Modals/CreateTeacherModal";
import CreateStudentModal from "../components/Modals/CreateStudentModal";
import HelpModal from "../components/Modals/HelpModal";
import UpdateTeacherModal from "../components/Modals/UpdateTeacherModal";
import UpdateAmbassadorModal from "../components/Modals/UpdateAmbassadorModal";
>>>>>>> 35865f15dbbfc379baec6bc9a2a06474727a471a
import * as userActions from "../store/user/actions";
import * as studentsActions from "../store/students/actions";
import * as userSelectors from "../store/user/selectors";

// SemanticUI + Components
import { Button, Container } from "semantic-ui-react";
import DashboardAdmin from "../components/Dashboard/Views/DashboardAdmin";
import DashboardMain from "../components/Dashboard/Views/DashboardMain";
import Layout from "../components/Layout";
import HelpModal from "../components/Modals/HelpModal";

// Styles
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
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

<<<<<<< HEAD
  const closeModal = () => {
    setModelOpen(false);
=======
  const onClickMenuItem = (state) => {
    return () => {
      // TO-DO: Uncomment to add RBAC
      // if (role != "admin") {
      //   setMenuState("Students")
      //   return;
      // }
      setMenuState(state);
    };
>>>>>>> 35865f15dbbfc379baec6bc9a2a06474727a471a
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

<<<<<<< HEAD
  console.log(role);
=======
  const getCards = (state) => {
    switch (state) {
      case "Students":
        return students && students.length > 0
          ? students.map((profile) => {
              return (
                <StudentCard profile={profile} key={profile._id}></StudentCard>
              );
            })
          : [];
      case "Ambassadors":
        return ambassadors && ambassadors.length > 0
          ? ambassadors.map((profile) => {
              return (
                <UpdateAmbassadorModal
                  profile={profile}
                  students={students}
                  key={profile._id}
                ></UpdateAmbassadorModal>
              );
            })
          : [];
      case "Teachers":
        return teachers && teachers.length > 0
          ? teachers.map((profile) => {
              return (
                <UpdateTeacherModal
                  profile={profile}
                  students={students}
                  key={profile._id}
                ></UpdateTeacherModal>
              );
            })
          : [];
      default:
        return [];
    }
  };
>>>>>>> 35865f15dbbfc379baec6bc9a2a06474727a471a

  const getCreateModal = (state) => {
    switch (state) {
      case "Students":
        return <CreateStudentModal />;
      case "Ambassadors":
        return <CreateAmbassadorModal students={students} />;
      case "Teachers":
        return <CreateTeacherModal students={students} />;
      default:
        return [];
    }
  };

  return (
    <>
      <Layout>
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-header-title">
              Welcome {user ? <u>{firstName}</u> : null}!
            </h1>

            {role == "teacher" || role == "ambassador" ? (
              <Button primary onClick={() => setIsHelpModalOpen(true)}>
                Need Help?
              </Button>
            ) : (
              getCreateModal(menuState)
            )}
          </div>
          {role === "admin" ? <DashboardAdmin /> : <DashboardMain />}
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
});

export default connect(mapStateToProps)(Dashboard);
