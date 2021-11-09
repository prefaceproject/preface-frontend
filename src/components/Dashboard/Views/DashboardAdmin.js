import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

// Semantic
import { Menu } from "semantic-ui-react";

import StudentList from "./StudentList";
import AmbassadorList from "./AmbassadorList";
import TeacherList from "./TeacherList";

// Modals
import CreateAmbassadorModal from "../../Modals/CreateAmbassadorModal";
import CreateTeacherModal from "../../Modals/CreateTeacherModal";
import CreateStudentModal from "../../Modals/CreateStudentModal";

const DashboardAdmin = ({ user }) => {
  const [menuState, setMenuState] = useState("Students");

  let role = null;
  if (user && user.role) {
    role = user.role;
  }

  const onClickMenuItem = (state) => {
    return () => {
      if (role != "admin") {
        setMenuState("Students");
        return;
      }
      setMenuState(state);
    };
  };

  const getComponents = () => {
    switch (menuState) {
      case "Students":
        return { List: StudentList, Modal: CreateStudentModal };
      case "Ambassadors":
        return { List: AmbassadorList, Modal: CreateAmbassadorModal };
      case "Teachers":
        return { List: TeacherList, Modal: CreateTeacherModal };
      default:
        return null;
    }
  };

  const { List, Modal } = getComponents();

  return (
    <>
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
        <Menu.Menu position="right">
          <Menu.Item>
            <Modal />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <List />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(DashboardAdmin);
