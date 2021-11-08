// React
import React from "react";

// Redux
import { connect } from "react-redux";

// Card + Container Related
import CardContainer from "../../CardContainer";
import StudentCard from "../Cards/StudentCard";

const DashboardMain = ({ students }) => {
  const getCards = (list) => {
    return list && list.length > 0
      ? list.map((profile) => {
          return <StudentCard profile={profile} key={profile._id} />;
        })
      : [];
  };

  return (
    <CardContainer
      title={`List of participating students`}
      cards={getCards(students)}
      cardsPerPage={5}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
  students: state.students.studentList,
});

export default connect(mapStateToProps)(DashboardMain);
