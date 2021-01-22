// called from components to read data in the store

// no destructuring
export const getExampleLoading = (state) => state.example.loading;
// destructured style
export const getExampleData = ({ example: { data } }) => data;
export const getExampleError = ({ example: { error } }) => error;
