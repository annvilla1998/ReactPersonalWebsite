import { Link } from 'react-router-dom'
import './Navigation.css'


export const Navigation = () => {

    return (
        <nav className="nav-container">
            <div id="home-link">
                <Link to="/">Anabel Villalobos</Link>
            </div>
            <div className="nav-right">
                <div id="resume-link">
                    <Link to="/resume">Resume</Link>
                </div>
                <div id="portfolio-link">
                    <Link to="/portfolio">Portfolio</Link>
                </div>
                <div id="contact-link">
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
