const projectReducer = (state = false, action) => {
  if (action.type === 'DISPLAY_PROJECT') {
    return !state;
  }
  return state;
};

export default projectReducer;
