import React, { useState } from "react";

// Redux
import { connect, useDispatch, useSelector } from "react-redux";

// Semantic
import { Menu, Icon } from "semantic-ui-react";

// Card + Container Related
import CardContainer from "../../CardContainer";
import StudentCard from "../Cards/StudentCard";
import AmbassadorCard from "../Cards/AmbassadorCard";
import TeacherCard from "../Cards/TeacherCard";

// Modals
import CreateAmbassadorModal from "../../Modals/CreateAmbassadorModal";
import CreateTeacherModal from "../../Modals/CreateTeacherModal";
import CreateStudentModal from "../../Modals/CreateStudentModal";

import UpdateAmbassadorModal from "../../Modals/UpdateAmbassadorModal";
import UpdateTeacherModal from "../../Modals/UpdateTeacherModal";

const DashboardAdmin = ({ user, students, ambassadors, teachers }) => {
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

  const getModals = (state) => {
    switch (state) {
      case "Students":
        return <CreateStudentModal />;
      case "Ambassadors":
        return <CreateAmbassadorModal students={students} />;
      case "Teachers":
        return <CreateTeacherModal students={students} />;
      default:
        return null;
    }
  };

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
          <Menu.Item>{getModals(menuState)}</Menu.Item>
        </Menu.Menu>
      </Menu>
      <CardContainer
        title={`List of participating ${menuState.toLowerCase()}`}
        cards={getCards(menuState)}
        cardsPerPage={5}
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

export default connect(mapStateToProps)(DashboardAdmin);
