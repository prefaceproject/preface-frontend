export const getUser = ({ user: { data } }) => data;
export const getAllAmbassadors = ({user: { ambassadorList } }) => ambassadorList;
export const getAllTeachers = ({user: { teacherList } }) => teacherList;
export const getPasswordError = ({user: {passwordError}}) => passwordError;
