import './Portfolio.css'
import { useState } from 'react'
import camplifeHomepage from '../../assets/images/camplife home.png'
import camplifeSiteDetails from '../../assets/images/campsitedetails.png'
import eventtodoform from '../../assets/images/eventtodoeventform.png'
import eventtodoHomepage from '../../assets/images/eventtodoHomepage.png'
import eventtodoLogin from '../../assets/images/eventtodologin.png'
import instaounceexplore from '../../assets/images/instaounceexplorepage.png'
import instaouncefollowers from '../../assets/images/instaouncefollowers.png'
import instaounceHomepage from '../../assets/images/instaounceHomepage.png'
import instaouncePost from '../../assets/images/instaouncepostform.png'
import instaounceProfile from '../../assets/images/instaounceprofilepage.png'
import instaounceSearch from '../../assets/images/instaounceSearch.png'

export const Portfolio = () => {
    const [campCurrentImageIndex, setCampCurrentImageIndex] = useState(0)
    const [eventCurrentImageIndex, setEventCurrentImageIndex] = useState(0)
    const [instaCurrentImageIndex, setInstaCurrentImageIndex] = useState(0)
    const instaImages = [instaounceexplore, instaouncefollowers, instaounceHomepage,instaouncePost,instaounceProfile,instaounceSearch]
    const eventImages = [eventtodoform, eventtodoHomepage, eventtodoLogin]
    const campImages = [camplifeHomepage, camplifeSiteDetails]

    const handleSwipeRight = () => {
        // const container = document.querySelector('.projects-container')
        // container.scrollTo({ right: 0 })
    }

    return (
        <div className="portfolio-page">
            <i className="fa-solid fa-caret-left"></i>
            <div>
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                <div className="project 1">
                    <a target="_blank" rel="noopener noreferrer" href="https://instaounce-clone.herokuapp.com/login">
                        <h2>Instaounce</h2>
                        <div className="project-image">
                            <i className="fa-solid fa-angle-left"></i>
                                <img alt="Instaounce" src={instaImages[instaCurrentImageIndex]} />
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </a>
                </div>  
                <div className="project 2">
                    <a target="_blank" rel="noopener noreferrer" href="https://camplife1.herokuapp.com/">
                        <h2>Camplife</h2>
                        <div className="project-image">
                            <i className="fa-solid fa-angle-left"></i>
                                <img alt="Camplife" src={campImages[campCurrentImageIndex]} />
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </a>
                </div>  
                <div className="project 3">
                    <a target="_blank" rel="noopener noreferrer" href="https://eventtodo.herokuapp.com/">
                        <h2>Eventtodo</h2>
                        <div className="project-image">
                            <i className="fa-solid fa-angle-left"></i>
                                <img alt="EventToDo" src={eventImages[eventCurrentImageIndex]} />
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </a>
                </div> 
            </div>
            <i onClick={handleSwipeRight} className="fa-solid fa-caret-right"></i>
        </div>
    )
}
