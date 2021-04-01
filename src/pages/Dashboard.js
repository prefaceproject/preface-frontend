// React
import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

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

  const closeModal = () => {
    setModelOpen(false);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  // const getCreateModal = (state) => {
  //   switch (state) {
  //     case "Students":
  //       return <CreateStudentModal />;
  //     case "Ambassadors":
  //       return <CreateAmbassadorModal students={students} />;
  //     case "Teachers":
  //       return <CreateTeacherModal students={students} />;
  //     default:
  //       return [];
  //   }
  // };

  return (
    <>
      <Layout>
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-header-title">
              Welcome {user ? <u>{firstName}</u> : null}!
            </h1>
            {(role !== "admin") &&
            <Button  onClick={() => setIsHelpModalOpen(true)}>
              Need Help?
            </Button>
            }
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
