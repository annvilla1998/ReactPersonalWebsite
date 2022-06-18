import './Resume.css'
import resume from '../../assets/files/resume.pdf'

export const Resume = () => {

    return (
        <div className="resume-page">
            <article id="resume">
                <header>
                    <h1 style={{color: "var(--color-3)", fontSize:"2rem"}}>Anabel Villalobos</h1>
                    <div className="resume-header-contact-info">
                        <p>(760) 881-2253</p>
                        <p>villalobos1998@gmail.com</p>
                        <a href="https://www.linkedin.com/in/anabel-villalobos-5772ab196/" >LinkedIn</a>
                        <a href="https://github.com/annvilla1998" >Github</a>
                    </div>
                </header>
                <main>
                    <div id="skills-section">
                        <h2>Skills</h2>
                        <p>
                        Python, Flask, JavaScript, Express, React.js, Redux.js, SQLAlchemy, Sequelize, PostgreSQL, Amazon Web Services(AWS),
                        HTML5, CSS3, Git, Docker, Node.js, Heroku, Adobe Illustrator, Adobe Photoshop
                        </p>
                    </div>
                    <div id="projects-section">
                        <h2>Projects</h2>
                        <div className="resume-project">
                            <p style={{fontWeight: "700"}}><a target="_blank" rel="noopener noreferrer" href="https://eventtodo.herokuapp.com/">EventToDo</a> (Python, Javascript, Flask, React / Redux, HTML5, CSS, SQLAlchemy, PostgreSQL, Faker)</p>
                            <p>Where you can plan around work and other important priorities to be able to attend music events.</p>
                            <ul>
                                <li>Utilized setInterval function within React useEffect hook to build an image carousel background for login/sign up pages.</li>
                                <li>Created custom error validations in the Flask backend and sent them forward using JSON format.</li>
                                <li>
                                Built a custom loading page animation with CSS keyframes, utilizing a setTimeout in a useEffect hook to manipulate page
                                loading state in the App component.
                                </li>
                            </ul>
                        </div>
                        <div className="resume-project">
                            <p style={{fontWeight: "700"}}><a target="_blank" rel="noopener noreferrer" href="https://instaounce-clone.herokuapp.com/login">Instaounce</a> (Python, Javascript, Flask, React / Redux, HTML5, CSS, SQLAlchemy, PostgreSQL, Faker)</p>
                            <p>A clone of Instagram. Contributors: Myself, Jacob North, Wooyoung Kim, Wan-yi.</p>
                            <ul>
                                <li>Implemented AWS3 to upload images while using Redux state reducer to immediately render the post in the user feed.</li>
                                <li>Implemented HTML drag and drop feature when uploading images to manipulate image order.</li>
                                <li>Integrated “Lorem Picsum” API and Faker to seed data for testing purposes.</li>
                                <li>
                                Built a user search bar using onChange in search input to change query useState variable, executing a function to filter
                                users fetched from the database according to the query.
                                </li>
                            </ul>
                        </div>
                        <div className="resume-project">
                            <p style={{fontWeight: "700"}}><a target="_blank" rel="noopener noreferrer" href="https://camplife1.herokuapp.com/">Camplife</a> (JavaScript, Express, React / Redux, HTML5, CSS, Sequelize, PostgreSQL, Faker)</p>
                            <p>An application based off of HipCamp. Where you can host and book campsites.</p>
                            <ul>
                                <li>Utilized onClick functions to upload multiple images at a time when hosting a campsite.</li>
                                <li>Utilized URL.createObjectURL() method to convert each local image file to storable data.</li>
                                <li>Created a modal with multiple pages using React useState variables and React useContext.</li>
                                <li>Used React Link built-in component to send review data as props to path location.</li>
                            </ul>
                        </div>
                        <div className="resume-project">
                            <p style={{fontWeight: "700"}}><a target="_blank" rel="noopener noreferrer" href="https://shouldsees.herokuapp.com/">ShouldSees</a> (JavaScript, Express, Pug, HTML5, CSS, Sequelize, PostgreSQL, Faker)</p>
                            <p>An application based off of Goodreads. Contributors: Myself, Sharon Fang, Shams Shaikh, Ty Rickers</p>
                            <ul>
                                <li>Used Sequelize queries in Express routes to shift data from “Have Watched”, “Want to Watch”, and “Is Watching” lists.</li>
                                <li>Used CSS grid to organize data into a browse section for easy access to all shows available in the database.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="experience-section">
                        <div className="header-date">
                            <h2>Experience</h2>
                            <p>March 2018 - April 2022</p>
                        </div>
                        <p>Cosmos Taverna, Bar Louie</p>
                        <p>Sports/Event/Restaurant Bartender</p>
                        <ul>
                            <li>Learned how to work fast under pressure with a smile.</li>
                            <li>Managed to keep up 31 plus people satisfied with service as a lone bartender.</li>
                            <li>Trained and developed other bartenders in selling and bar techniques and procedures.</li>
                        </ul>
                    </div>
                    <div id="education-section">
                        <div className="header-date">
                            <h2>Education</h2>
                            <p>August 2021 - May 2022</p>
                        </div>
                        <p>AppAcademy</p>
                        <p>Immersive software development 24 week course with focus on full stack web development.</p>
                        <ul>
                            <li>Coded daily for 8+ hours and tested weekly to avoid deferral.</li>
                            <li>Pair programmed daily and learned tons from many amazing programmers.</li>
                            <li>Learned to be disciplined when it comes to time management.</li>
                        </ul>
                    </div>
                </main>
            </article>
            <footer>
                <a href={resume} download>Download Resume</a>
            </footer>
        </div>
    )
}

