import { useEffect } from 'react';
import './App.css';
import ThemeComponent from './components/ThemeComponent';
import ThemeProvider from './utils/ThemeContext';

export default function App() {
  useEffect(() => {
    document.title = 'Module 22.1: useReducer';
  }, []);

  return (
    <ThemeProvider>
      <ThemeComponent />

    </ThemeProvider>
  );
}
