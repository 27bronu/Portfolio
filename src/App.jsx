import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from 'react-router-dom';
import './index.css'; 

function App() {
  const currentTheme = localStorage.getItem('current-theme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('current-theme', theme);
  }, [theme]);

  return ( 
    <div className={`theme-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/> 
      <div className="page-transition">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
