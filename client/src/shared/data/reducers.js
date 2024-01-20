const initialState = {
  jsonData: [],
};

export const jsonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JSON_DATA':
      return {
        ...state,
        jsonData: action.payload,
      };
    default:
      return state;
  }
};