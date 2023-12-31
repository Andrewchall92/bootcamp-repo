import { createContext, useContext, useReducer } from 'react';

import reducer from './reducers';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to immediately pass the student context value ({ students, majors } - see line 36) to any consumer component which invokes it
export const useStudentContext = () => useContext(StudentContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const StudentProvider = ({ children }) => {
  const students = [
    {
      id: 1,
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: 2,
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ];

  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  const appState = useReducer(reducer, { students, majors })

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider value={appState}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </StudentContext.Provider>
  );
};
