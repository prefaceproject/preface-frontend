export const getUser = ({ user: { data } }) => data;
export const getAllAmbassadors = ({user: { ambassadorList } }) => ambassadorList;
export const getAllTeachers = ({user: { teacherList } }) => teacherList;
export const getAllStudents = ({user: { studentList } }) => studentList;