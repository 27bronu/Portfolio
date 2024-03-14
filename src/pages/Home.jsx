import { NavLink } from 'react-router-dom';

export default function Home() {

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Bruno!</h1>
        <p className="home-description">Web Dev Student</p>
        <NavLink to="/about" className={"home-about-button"}>Know more about me</NavLink>
      </div>
    </div>
  );
};
