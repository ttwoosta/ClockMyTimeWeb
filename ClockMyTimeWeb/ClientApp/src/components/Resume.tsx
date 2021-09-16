import * as React from 'react';
import 'react-calendar/dist/Calendar.css';
import './ResumeStyles.css';
import About from './ResumeComponents/About';
import Experience from './ResumeComponents/Experience';
import Education from './ResumeComponents/Education';
import Skills from './ResumeComponents/Skills';
import Awards from './ResumeComponents/Awards';

export default class Resume extends React.Component {

    render() {
        return (<div><nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Tu Tong</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="profile_small.jpg" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="https://becker-clock-api.azurewebsites.net/dashboard">Machine Learning</a></li>
                </ul>
            </div>
        </nav>
            <div className="container-fluid p-0">
                
            <section className="resume-section" id="about">
                    <About />
                </section>
                <hr className="m-0" />
                
            <section className="resume-section" id="experience">
                    <Experience />
                </section>
                <hr className="m-0" />
                
            <section className="resume-section" id="education">
                    <Education />
                </section>
                <hr className="m-0" />
                
            <section className="resume-section" id="skills">
                    <Skills />
                </section>
                <hr className="m-0" />
                
            <hr className="m-0" />
                
            <section className="resume-section" id="awards">
                    <Awards />
                </section>
            </div>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>The site create with <a href="https://startbootstrap.com/themes/resume/">[Start Bootstrap - Resume]</a>.</p>
                </div>
            </footer>
            </div>
        );
    }
}