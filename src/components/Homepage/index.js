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
                    frontend and backend development tools like React, Redux, JavaScript, Nodejs. Docker, AWS, 
                    CSS, HTML, PostgreSQL, Sequelize, SQLAlchemy, Github, Python, & Flask to deliver fast applications. 
                    I am also experienced in writing tests and testing with Mocha and Chai libraries. I love the challenge,
                    the thrill and the thought, an imagination can come to life with code. I have developed an insatiable 
                    appetite for turning lines of code into real life applications. My primary focus currently is becoming
                    a better Developer on various tech stacks. I am both driven and self-motivated, constantly seeking to
                    learn new technologies and frameworks
                    </p>
                    <a href="https://github.com/annvilla1998"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/anabel-villalobos-5772ab196/"><i className="fa-brands fa-linkedin-in"></i></a>
                </section>
                <img alt="Anabel Vilalobos" src={me}/>
            </div>
        </main>
    )
}
