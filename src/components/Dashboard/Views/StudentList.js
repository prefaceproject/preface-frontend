import React from "react";
import { useSelector } from "react-redux";

import StudentCard from "../Cards/StudentCard";
import { PaginationContainer } from "../../Pagination";
import { fetchPaginatedStudents } from "../../../store/students/actions";
import { getUser } from "../../../store/user/selectors";
import {
  getPaginatedStudents,
  getTotal,
  getCacheValid,
} from "../../../store/students/selectors";

const StudentList = () => {
  const user = useSelector(getUser);
  const sortByOptions = [
    { key: "updated", value: "updatedAt", text: "Updated" },
    { key: "created", value: "createdAt", text: "Created" },
    { key: "first", value: "firstName", text: "First Name" },
    { key: "last", value: "lastName", text: "Last Name" },
    { key: "school", value: "school", text: "School" },
  ];
  return (
    <PaginationContainer
      fetchResults={(options) => fetchPaginatedStudents(user._id, options)}
      retrieveResults={getPaginatedStudents}
      getTotal={getTotal}
      sortByOptions={sortByOptions}
      getCacheValidStatus={getCacheValid}
    >
      {({ results: students }) => {
        return (
          students &&
          students.map((student) => {
            return <StudentCard profile={student} key={student._id} />;
          })
        );
      }}
    </PaginationContainer>
  );
};

export default StudentList;
