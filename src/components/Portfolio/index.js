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
import instaounceProfile from '../../assets/images/instaounceprofilepage.png'
import instaounceSearch from '../../assets/images/instaounceSearch.png'
import crownClothingHomepage from '../../assets/images/crownClothingHomepage.png'
import crownClothingSignIn from '../../assets/images/crownClothingSignIn.png'
import crownClothingCheckout from '../../assets/images/crownClothingCheckout.png'
import crownClothingShop from '../../assets/images/crownClothingShop.png';

export const Portfolio = () => {
    const ref = useRef(null)
    const [scrollStopPoint, setScrollStopPoint] = useState(500)
    const [campCurrentImageIndex, setCampCurrentImageIndex] = useState(0)
    const [eventCurrentImageIndex, setEventCurrentImageIndex] = useState(0)
    const [instaCurrentImageIndex, setInstaCurrentImageIndex] = useState(0)
    const [crownCurrentImageIndex, setCrownCurrentImageIndex] = useState(0)
    const instaImages = [instaounceexplore, instaouncefollowers, instaounceHomepage,instaounceProfile,instaounceSearch]
    const eventImages = [eventtodoform, eventtodoHomepage, eventtodoLogin]
    const campImages = [camplifeHomepage, camplifeSiteDetails, campLifeReviews]
    const crownImages = [crownClothingHomepage, crownClothingSignIn, crownClothingCheckout, crownClothingShop]

    const scrollRight = () => {
        setScrollStopPoint(scrollStopPoint + 500)
        ref.current.scrollTo({ left: scrollStopPoint, behavior: 'smooth'})
    }


    const scrollLeft = () => {
        setScrollStopPoint(0)
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

    const handleCrownRightImageChange = () => {
        if(crownCurrentImageIndex < crownImages.length - 1){
            setCrownCurrentImageIndex(crownCurrentImageIndex + 1)
        }
    }

    const handleCrownLeftImageChange = () => {
        if(crownCurrentImageIndex > 0) {
            setCrownCurrentImageIndex(crownCurrentImageIndex - 1)
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
                        <ul>Built with:
                            <li>React/Redux</li>
                            <li>Javascript</li>
                            <li>Nodejs</li>
                            <li>Flask</li>
                            <li>Python</li>
                            <li>PostgreSQL</li>
                            <li>SQLAlchemy</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="project-image">
                            <i onClick={handleInstaLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="Instaounce" src={instaImages[instaCurrentImageIndex]} />
                            <i onClick={handleInstaRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                        <p>A full stack clone of Instagram where you can share photos with family and friends. </p>
                </div>  
                <div className="project 2">
                    <a target="_blank" rel="noopener noreferrer" href="https://camplife1.herokuapp.com/">
                        <h2>Camplife</h2>
                    </a>
                        <p>Based off <a target="_blank" rel="noopener noreferrer" href="https://www.hipcamp.com/en-US">HipCamp</a></p>
                        <ul>Built with:
                            <li>React/Redux</li>
                            <li>Javascript</li>
                            <li>Expressjs</li>
                            <li>Nodejs</li>
                            <li>PostgreSQL</li>
                            <li>Sequelize</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="project-image">
                            <i onClick={handleCampLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="Camplife" src={campImages[campCurrentImageIndex]} />
                            <i onClick={handleCampRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                        <p>Camplife is where you can host campsites, book campsites, 
                            and leave reviews on campsites within the database. I am currently working on implementing AWS3 buckets
                            and google maps.</p>
                </div>  
                <div className="project 3">
                    <a target="_blank" rel="noopener noreferrer" href="https://eventtodo.herokuapp.com/">
                        <h2>Eventtodo</h2>
                    </a>
                        <p>Based off <a target="_blank" rel="noopener noreferrer" href="https://todoist.com/">todoist</a></p>
                        <ul>Built with:
                            <li>React/Redux</li>
                            <li>Javascript</li>
                            <li>Nodejs</li>
                            <li>Flask</li>
                            <li>Python</li>
                            <li>PostgreSQL</li>
                            <li>SQLAlchemy</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="project-image">
                            <i onClick={handleEventLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="EventToDo" src={eventImages[eventCurrentImageIndex]} />
                            <i onClick={handleEventRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                        <p>Eventtodo allows a user to
                            stay organized and plan around work priorities to be able to attend music events. 
                            A user can create an event and schedule tasks they need to complete in order to attend that event.</p>
                </div> 
                <div className="project 4">
                    <a target="_blank" rel="noopener noreferrer" href="https://tiny-yeot-0527fa.netlify.app/">
                        <h2>Crown Clothing</h2>
                    </a>
                        <ul>Built with:
                            <li>React/Redux</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Stripe</li>
                            <li>Firebase</li>
                            <li>Netlify</li>
                        </ul>
                        <div className="project-image">
                            <i onClick={handleCrownLeftImageChange} className="fa-solid fa-angle-left"></i>
                                <img alt="EventToDo" src={crownImages[crownCurrentImageIndex]} />
                            <i onClick={handleCrownRightImageChange} className="fa-solid fa-angle-right"></i>
                        </div>
                        <p>This was a project I built during my Udemy course "Complete React Developer". In this project I utilized React, 
                            the React styled components library, Netlify for deployment, and Firebase for data storage and authentication.</p>
                </div> 
            </div>
            <i onClick={scrollRight} className="fa-solid fa-caret-right"></i>
        </div>
    )
}
