import {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';


function App() {

  const current_theme = localStorage.getItem('current-theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current-theme', theme);
  }, [theme]);

  return ( 
    <div className={`theme-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/> 
      <Outlet/>
    </div>

  );
}

export default App;
