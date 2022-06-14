import { NavLink } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {


    return (
        <nav className="nav-container">
            <div id="home-link">
                <NavLink style={({ isActive }) => ({
                    border: isActive ? '1px solid var(--color-4)' : 'none',
                    padding: isActive ? '2px' : '0',
                    color: isActive ? 'var(--color-4)' : 'white'
                })} to="/">Anabel Villalobos</NavLink>
            </div>
            <div className="nav-right">
                <div id="resume-link">
                    <NavLink style={({ isActive }) => ({
                        border: isActive ? '1px solid var(--color-4)' : 'none',
                        padding: isActive ? '2px' : '0',
                        color: isActive ? 'var(--color-4)' : 'white'
                    })} to="/resume">Resume</NavLink>
                </div>
                {/* <div id="portfolio-link">
                    <Link onClick={() =>handleActiveLink()} to="/portfolio">Portfolio</Link>
                </div> */}
                <div id="contact-link">
                    <NavLink style={({ isActive }) => ({
                        border: isActive ? '1px solid var(--color-4)' : 'none',
                        padding: isActive ? '2px' : '0',
                        color: isActive ? 'var(--color-4)' : 'white'
                    })} to="/contact">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}
