import AboutMe from "../components/AboutMe";
import Skills from '../components/Skills';

export function About() {
    return (
        <div className="about-container">
            <AboutMe/>
            <Skills />
        </div>
    );
}
