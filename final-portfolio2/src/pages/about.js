import React from "react"
import Header from '../components/header'
import me from '../images/me.png'
import linkedin from '../images/linkedinlogo.png'
import github from '../images/githublogo.png'
import mail from '../images/mail.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Interests from '../components/interests'
import resume from '../images/resume.pdf'

function About() {

    AOS.init({
        duration: 1200,
    });

    return (
        <div id="about">
            <Header />
            <div className="about-container">
                <div className="item" data-aos="zoom-in">
                    <div className='image-container'>
                        <img className='ariana-pic' src={me} alt="Ariana Hwang" />
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className='bio'>
                        <p>My name is Ariana Hwang. I'm a fullstack software engineer based in Long Island, New York. I graduated from CUNY Baruch College in May 2018 with a bachelor's degree in Digital Marketing and minor in Journalism.</p>
                        <h3>Front-End</h3>
                        <p>JavaScript, ReactJS, Redux, Ionic, HTML, CSS, Sass, Material-UI</p>
                        <h3>Back-End</h3>
                        <p>NodeJS, Express, PostgreSQL</p>
                        <div className='contact'>
                            <a href='https://www.linkedin.com/in/ariana-hwang-892a59ba' target="_blank" >
                                <img className='linkedin' src={linkedin} alt="linkedin" />
                            </a>
                            <a href='https://github.com/Ahwan0717' target="_blank" >
                                <img className='github' src={github} alt="github" />
                            </a>
                            <a href="mailto:ajhwang0717@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img className='mail' src={mail} alt="email" />
                            </a>
                            <button className="button">
                                <a href={resume} download>
                                    Download Resume
                                </a>
                            </button>
                        </div>
                        <h3 className="interests-title">Interests</h3>
                    </div>
                </div>
            </div>
            <Interests />
        </div>

    )

}

export default About;