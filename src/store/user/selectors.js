export const getUser = ({ user: { data } }) => data;
export const getAllAmbassadors = ({ user: { ambassadorList } }) =>
  ambassadorList;
export const getAllTeachers = ({ user: { teacherList } }) => teacherList;
export const getError = ({ user: { error } }) => error;
export const getPasswordError = ({ user: { passwordError } }) => passwordError;
export const getResetPasswordError = ({ user: { resetPasswordError } }) =>
  resetPasswordError;
export const getLoginError = ({ user: { loginError } }) => loginError;
export const getAutoLoginError = ({ user: { autoLoginError } }) =>
  autoLoginError;
export const getUpdateProfileError = ({ user: { updateProfileError } }) =>
  updateProfileError;
export const getTotalAmbassadors = ({ user: { totalAmbassadors } }) =>
  totalAmbassadors;
export const getTotalTeachers = ({ user: { totalTeachers } }) => totalTeachers;
export const getAmbassadorCacheValid = ({ user: { validAmbassadorCache } }) =>
  validAmbassadorCache;
export const getTeacherCacheValid = ({ user: { validTeacherCache } }) =>
  validTeacherCache;
