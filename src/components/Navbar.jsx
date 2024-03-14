import { NavLink } from 'react-router-dom';
import toogle_light from '../assets/night.png';
import toogle_dark from '../assets/day.png';

export default function Navbar({theme, setTheme}) {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light'); 
  };

  return (
    <div>
    <div className="navbar">
      <h1 className='navbar-logo'>
        <NavLink to="/">&lt;Bruno Neto/&gt;</NavLink>
      </h1>
      <ul> 
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
      </ul>
      <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className='navbar-toggle-icon'/>
    </div>
    </div>
  );
};
