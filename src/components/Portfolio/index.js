import './Portfolio.css'
import { useState, useRef } from 'react'
import camplifeHomepage from '../../assets/images/camplife home.png'
import camplifeSiteDetails from '../../assets/images/campsitedetails.png'
import campLifeReviews from '../../assets/images/campLifeReviews.png'
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
    const ref = useRef(null)
    const [campCurrentImageIndex, setCampCurrentImageIndex] = useState(0)
    const [eventCurrentImageIndex, setEventCurrentImageIndex] = useState(0)
    const [instaCurrentImageIndex, setInstaCurrentImageIndex] = useState(0)
    const instaImages = [instaounceexplore, instaouncefollowers, instaounceHomepage,instaouncePost,instaounceProfile,instaounceSearch]
    const eventImages = [eventtodoform, eventtodoHomepage, eventtodoLogin]
    const campImages = [camplifeHomepage, camplifeSiteDetails, campLifeReviews]

    const scrollRight = () => {
        ref.current.scrollTo({ left: 1000, behavior: 'smooth'})
    }


    const scrollLeft = () => {
        ref.current.scrollTo({ left: 0, behavior: 'smooth'})
    }

    const handleInstaRightImageChange = () => {
        if(instaCurrentImageIndex < instaImages.length - 1){
            setInstaCurrentImageIndex(instaCurrentImageIndex + 1)
        }
    }

    const handleInstaLeftImageChange = () => {
        if(instaCurrentImageIndex > 0) {
            setInstaCurrentImageIndex(instaCurrentImageIndex - 1)
        }
    }

    const handleEventRightImageChange = () => {
        if(eventCurrentImageIndex < eventImages.length - 1){
            setEventCurrentImageIndex(eventCurrentImageIndex + 1)
        }
    }

    const handleEventLeftImageChange = () => {
         if(eventCurrentImageIndex > 0) {
            setEventCurrentImageIndex(eventCurrentImageIndex - 1)
        }
    }

    const handleCampRightImageChange = () => {
        if(campCurrentImageIndex < campImages.length - 1){
            setCampCurrentImageIndex(campCurrentImageIndex + 1)
        }
    }

    const handleCampLeftImageChange = () => {
        if(campCurrentImageIndex > 0) {
            setCampCurrentImageIndex(campCurrentImageIndex - 1)
        }
    }

    return (
        <div className="portfolio-page">
            <i  onClick={scrollLeft} className="fa-solid fa-caret-left"></i>
            <div>
                <h1>Projects</h1>
            </div>
            <div className="projects-container" ref={ref}>
                <div className="project 1">
                    <a target="_blank" rel="noopener noreferrer" href="https://instaounce-clone.herokuapp.com/login">
                        <h2>Instaounce</h2>
                    </a>
                        <p>Clone of <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">Instagram</a></p>
                        <div className="project-image">
                            <i onClick={handleInstaLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="Instaounce" src={instaImages[instaCurrentImageIndex]} />
                            <i onClick={handleInstaRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                </div>  
                <div className="project 2">
                    <a target="_blank" rel="noopener noreferrer" href="https://camplife1.herokuapp.com/">
                        <h2>Camplife</h2>
                    </a>
                        <p>Based off <a target="_blank" rel="noopener noreferrer" href="https://www.hipcamp.com/en-US">HipCamp</a></p>
                        <div className="project-image">
                            <i onClick={handleCampLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="Camplife" src={campImages[campCurrentImageIndex]} />
                            <i onClick={handleCampRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                </div>  
                <div className="project 3">
                    <a target="_blank" rel="noopener noreferrer" href="https://eventtodo.herokuapp.com/">
                        <h2>Eventtodo</h2>
                    </a>
                        <p>Based off <a target="_blank" rel="noopener noreferrer" href="https://todoist.com/">todoist</a></p>
                        <div className="project-image">
                            <i onClick={handleEventLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="EventToDo" src={eventImages[eventCurrentImageIndex]} />
                            <i onClick={handleEventRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                </div> 
            </div>
            <i onClick={scrollRight} className="fa-solid fa-caret-right"></i>
        </div>
    )
}
