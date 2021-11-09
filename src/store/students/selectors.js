export const getAllStudents = ({ students: { studentList } }) => studentList;
export const getStudentById = ({ students: { studentById } }) => studentById;
export const getStudentLoading = ({ students: { studentLoading } }) =>
  studentLoading;

export const getTotal = ({ students: { total } }) => total;
export const getCacheValid = ({ students: { validCache } }) => validCache;
