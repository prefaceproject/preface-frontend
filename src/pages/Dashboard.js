// React
import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { useSelector } from "react-redux";

import * as userSelectors from "../store/user/selectors";

// SemanticUI + Components
import { Button, Container } from "semantic-ui-react";
import DashboardAdmin from "../components/Dashboard/Views/DashboardAdmin";
import StudentList from "../components/Dashboard/Views/StudentList";
import Layout from "../components/Layout";
import HelpModal from "../components/Modals/HelpModal";

// Styles
import "./styles/Dashboard.css";

const Dashboard = () => {
  // Global State
  const user = useSelector(userSelectors.getUser);
  const { role, firstName } = user;

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
          {role === "admin" ? <DashboardAdmin /> : <StudentList />}
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
