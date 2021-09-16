import * as React from 'react';
import { connect } from 'react-redux';

class Awards extends React.PureComponent {

    public render() {
        return (
            <React.Fragment>
                <div className="resume-section-content">
                    <h2 className="mb-5">Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
          ASP.NET Core Identity: Authentication Management Certificate (2020)
      </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
          Building Applications with Angular, ASP.NET Core, and Entity Framework Core Certificate(2020)
      </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
          Learning React.js (2019)
      </li>

                    </ul>
                </div>
            </React.Fragment>
        );
    }
};

export default connect()(Awards);