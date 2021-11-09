import React from "react";

import TeacherCard from "../Cards/TeacherCard";
import { PaginationContainer } from "../../Pagination";
import { fetchAllTeachers } from "../../../store/user/actions";
import {
  getAllTeachers,
  getTotalTeachers,
  getTeacherCacheValid,
} from "../../../store/user/selectors";

const TeacherList = () => {
  const sortByOptions = [
    { key: "updated", value: "updatedAt", text: "Updated" },
    { key: "created", value: "createdAt", text: "Created" },
    { key: "first", value: "firstName", text: "First Name" },
    { key: "last", value: "lastName", text: "Last Name" },
    { key: "email", value: "email", text: "Email" },
    { key: "school", value: "school", text: "School" },
  ];

  return (
    <PaginationContainer
      fetchResults={fetchAllTeachers}
      retrieveResults={getAllTeachers}
      getTotal={getTotalTeachers}
      sortByOptions={sortByOptions}
      getCacheValidStatus={getTeacherCacheValid}
    >
      {({ results: teachers }) => {
        return (
          teachers &&
          teachers.map((teacher) => {
            return <TeacherCard profile={teacher} key={teacher._id} />;
          })
        );
      }}
    </PaginationContainer>
  );
};

export default TeacherList;
