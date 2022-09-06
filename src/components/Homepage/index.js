import './Homepage.css'
import me from '../../assets/images/me.jpg'

export const Homepage = () => {



    return (
        <main className="homepage-container">
            <div className="about-me-container">
                <section id="about-me">
                    <h1 style={{textAlign:"center"}}>Hello World</h1>
                    <p>
                    My name is Anabel Villalobos and welcome to my personal website. I'm a Software Engineer that 
                    specializes in full-stack web development and am experienced in building & utilizing modern 
                    frontend and backend development tools like <strong>React, Redux, JavaScript, Nodejs. Docker, AWS, 
                    CSS, HTML, PostgreSQL, Sequelize, SQLAlchemy, Github, Python, & Flask</strong> to deliver fast applications. 
                    One day I stumbled across CodeAcademy where I loved executing coding challenges and lessons. I instantly fell in love. 
                    Recognizing it would take me 4 further years and extra loans to pursue this education traditionally led me away from going 
                    back to college, so I enrolled in AppAcademy. In need of financial help, I quit my full time job and went back to my job 
                    as a bartender while coding at AppAcademy for around 60 hours a week. I studied various languages while collaborating with
                    diverse developers daily. I gained the ability to apply my skills at an unbelievable rate and my curiosity to learn more
                    increased. At AppAcademy, I learned an extensive range of technical skills. Not only that but I also learned how to 
                    master and quickly apply skills. I am the first in my family to graduate from a higher education and plan to accomplish much more
                    in my lifetime. I am now searching for an opportunity to crush my career in tech and make an impact.
                    </p>
                    <a href="https://github.com/annvilla1998"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/anabel-villalobos-5772ab196/"><i className="fa-brands fa-linkedin-in"></i></a>
                </section>
                <div className="profile-image">
                    <img alt="Anabel Vilalobos" src={me}/>
                </div>
            </div>
        </main>
    )
}
