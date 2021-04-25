import React, { useMemo, useState } from "react";

// Redux
import { connect, useDispatch, useSelector } from "react-redux";

// Semantic
import { Menu, Icon } from "semantic-ui-react";

// Card + Container Related
import CardContainer from "../../CardContainer";
import StudentCard from "../Cards/StudentCard";
import AmbassadorCard from "../Cards/AmbassadorCard";

// Modals
import CreateAmbassadorModal from "../../Modals/CreateAmbassadorModal";
import CreateTeacherModal from "../../Modals/CreateTeacherModal";
import CreateStudentModal from "../../Modals/CreateStudentModal";

import UpdateTeacherModal from "../../Modals/UpdateTeacherModal";
import TeacherCard from "../Cards/TeacherCard";

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

  const sortedStudents = useMemo(() => {
    const sortedStudents = [...students].sort((s1, s2) => {
      const { createdAt: s1CreatedAt } = s1;
      const { createdAt: s2CreatedAt } = s2;

      if (new Date(s1CreatedAt) > new Date(s2CreatedAt)) return -1;
      return 1;
    });
    return sortedStudents;
  }, [students]);

  const sortedAmbassdors = useMemo(() => {
    const sortedAmbassadors = [...ambassadors];
    sortedAmbassadors.reverse();
    return sortedAmbassadors;
  });

  const sortedTeachers = useMemo(() => {
    const sortedTeachers = [...teachers];
    sortedTeachers.reverse();
    return sortedTeachers;
  });

  const getCards = (state) => {
    switch (state) {
      case "Students":
        return sortedStudents && sortedStudents.length > 0
          ? sortedStudents.map((profile) => {
              return (
                <StudentCard profile={profile} key={profile._id}></StudentCard>
              );
            })
          : [];
      case "Ambassadors":
        return sortedAmbassdors && sortedAmbassdors.length > 0
          ? sortedAmbassdors.map((profile) => {
              return <AmbassadorCard profile={profile}></AmbassadorCard>;
            })
          : [];
      case "Teachers":
        return sortedTeachers && sortedTeachers.length > 0
          ? sortedTeachers.map((profile) => {
              return <TeacherCard profile={profile}></TeacherCard>;
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
