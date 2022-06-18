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

    return (
        <div className="portfolio-page">
            <div className="project 1">
                <a target="_blank" rel="noopener noreferrer" href="https://instaounce-clone.herokuapp.com/login">
                    <h1>Instaounce</h1>
                    <div className="project-image">
                        <img alt="Instaounce" src={instaImages[instaCurrentImageIndex]} />
                    </div>
                </a>
            </div>  
            <div className="project 2">
                <a target="_blank" rel="noopener noreferrer" href="https://camplife1.herokuapp.com/">
                    <h1>Camplife</h1>
                    <div className="project-image">
                        <img alt="Camplife" src={campImages[campCurrentImageIndex]} />
                    </div>
                </a>
            </div>  
            <div className="project 3">
                <a target="_blank" rel="noopener noreferrer" href="https://eventtodo.herokuapp.com/">
                    <h1>Eventtodo</h1>
                    <div className="project-image">
                        <img alt="EventToDo" src={eventImages[eventCurrentImageIndex]} />
                    </div>
                </a>
            </div>  
        </div>
    )
}
