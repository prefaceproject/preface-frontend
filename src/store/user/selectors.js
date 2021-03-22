export const getUser = ({ user: { data } }) => data;
export const getAllAmbassadors = ({ user: { ambassadorList } }) =>
  ambassadorList;
export const getAllTeachers = ({ user: { teacherList } }) => teacherList;
export const getError = ({ user: { error } }) => error;
export const getPasswordError = ({ user: { passwordError } }) => passwordError;
export const getResetPasswordError = ({ user: { resetPasswordError } }) => resetPasswordError;
export const getLoginError = ({ user: { loginError } }) => loginError;
export const getAutoLoginError = ({ user: { autoLoginError } }) =>
  autoLoginError;
