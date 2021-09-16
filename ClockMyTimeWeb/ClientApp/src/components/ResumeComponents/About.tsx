import * as React from 'react';
import { connect } from 'react-redux';

class About extends React.PureComponent {

    public render() {
        return (
            <React.Fragment>
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Tu <span className="text-primary">Tong</span>
                    </h1>
                    <div className="subheading mb-5">
                        Worcester, MA 
                        &middot;
                      <a href="mailto:ttong.2019@mymail.becker.edu">ttong.2019@mymail.becker.edu</a> 
                        &middot;
                      <a href="mailto:ttwoosta@gmail.com">ttwoosta@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I'm a student at Becker College majoring in computer science - data science. I'm currently a full-stack software developer at Avatar Computing.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/tu-tong-a440ab12a/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/ttwoosta"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://www.facebook.com/tony.tong.520125/"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default connect()(About);