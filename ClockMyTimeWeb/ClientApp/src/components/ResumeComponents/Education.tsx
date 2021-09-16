import * as React from 'react';
import { connect } from 'react-redux';

class Education extends React.PureComponent {

    public render() {
        return (
            <React.Fragment>
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Becker College</h3>
                            <div className="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science - Data Science</div>
                            <p>GPA: 3.79</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2019 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Quinsigamond Community College</h3>
                            <div className="subheading mb-3">Associate's degree - Computer Programming/Programmer, Web Development</div>
                            <p>GPA: 3.20</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2016 - May 2018</span></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default connect()(Education);