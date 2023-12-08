import { TOGGLE_THEME } from './actions';

export const reducer = (state, action) => {
  // const newDarkTheme = !action.payload
  const newDarkTheme = !state.darkTheme;
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: newDarkTheme,
        // darkTheme: !action.payload,
      };
    }
    default:
      return state;
  }
};
