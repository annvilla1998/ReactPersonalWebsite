import { Link } from 'react-router-dom'
import './Navigation.css'


export const Navigation = () => {

    return (
        <nav className="nav-container">
            <div id="home-link">
                <Link to="/">Anabel Villalobos</Link>
            </div>
            <div id="resume">
                <Link to="/resume">Resume</Link>
            </div>
            <div id="portfolio">
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <div id="contact">
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
