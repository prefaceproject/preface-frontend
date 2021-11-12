// React
import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import * as userActions from "../store/user/actions";
import * as userSelectors from "../store/user/selectors";

import * as studentActions from "../store/students/actions";
import * as studentSelectors from "../store/students/selectors";

// SemanticUI + Components
import { Button, Container } from "semantic-ui-react";
import DashboardAdmin from "../components/Dashboard/Views/DashboardAdmin";
import DashboardMain from "../components/Dashboard/Views/DashboardMain";
import Layout from "../components/Layout";
import HelpModal from "../components/Modals/HelpModal";

// Styles
import "./styles/Dashboard.css";

const Dashboard = () => {
  // Global State
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);
  const { role, firstName } = user;

  useEffect(() => {
    dispatch(studentActions.fetchAllStudents(user._id));
    dispatch(userActions.fetchAllAmbassadors());
    dispatch(userActions.fetchAllTeachers());
  }, []);

  // User Interface State
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <>
      <Layout>
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-header-title">
              Welcome {user ? <u>{firstName}</u> : null}!
            </h1>
            {role !== "admin" && (
              <Button onClick={() => setIsHelpModalOpen(true)}>
                Need Help?
              </Button>
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
