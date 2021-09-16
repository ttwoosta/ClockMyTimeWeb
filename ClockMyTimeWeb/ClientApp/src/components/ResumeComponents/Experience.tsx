import * as React from 'react';
import { connect } from 'react-redux';

class Experience extends React.PureComponent {

    public render() {
        return (
            <React.Fragment>
                <div>
                    <div className="resume-section-content">
                        <h2 className="mb-5">Experience</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Full-stack Software Developer</h3>
                                <div className="subheading mb-3">Avatar Computing</div>
                                <ul>
                                    <li>Developing front-end and back-end of business websites by utilize latest technology Angular, React, .NET Core.</li>
                                    <li>Enhancing the existing project by utilizes test driven development strategy.</li>
                                    <li>Implement unit testing into existing application that supports continuous integration.</li>
                                    <li>Conducting regression testing of the applications to ensure proper content delivery.</li>
                                    <li>Collaborate with others to develop back-end and front-end web applications.</li>
                                    <li>Debugging and resolving HTML/CSS Bootstrap, jQuery Ajax, and C# problems.</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">April 2019 - Present</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Associate Software Developer</h3>
                                <div className="subheading mb-3">Red Hawk IS</div>
                                <ul>
                                    <li>Focus on continuous improvement and learning</li>
                                    <li>Learn existing applications and enhance/improve code base</li>
                                    <li>Complete design and development tasks independently</li>
                                    <li>Work well with team members and business customers</li>
                                    <li>Captures and shares knowledge</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">September 2018 - April 2019</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Software Developer Internship</h3>
                                <div className="subheading mb-3">Nichols College</div>
                                <ul>
                                    <li>AI project: to develop and deploy an interactive AI that will streamline support to students</li>
                                    <li>Lead the development of AI and natural language processing framework into web application.</li>
                                    <li>Build, connect, deploy and manage intelligent AI that naturally interact with users on website.</li>
                                    <li>Working with supervisors to improve accuracy of intelligent AI.</li>
                                    <li>Collaborate with key state holder to stream line the development process.</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">May 2018 - July 2018</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">QA Specialist Internship</h3>
                                <div className="subheading mb-3">Avatar Computing</div>
                                <ul>
                                    <li>Avatar Clear Path Travel: A .NET Core application that utilizes the latest Microsoft technology for developing websites.</li>
                                    <li>Enhancing the existing project by utilizes test driven development strategy.</li>
                                    <li>Implement unit testing into existing application that supports continuous integration.</li>
                                    <li>Conducting regression testing of the applications to ensure proper content delivery.</li>
                                    <li>Collaborate with others to develop back-end and front-end web applications.</li>
                                    <li>Debugging and resolving HTML/CSS Bootstrap, jQuery Ajax, and C# problems.</li>
                                </ul>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">April 2018 - July 2018</span></div>
                        </div>

                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">VoIP Technician Internship</h3>
                                <div className="subheading mb-3">Business Communication Systems Inc</div>
                                <ul>
                                    <li>Assist with VoIP deployments and/or operations</li>
                                    <li>Accurately document deployment and/or operations processes</li>
                                    <li>Exchange information, verbally and in writing, clearly, accurately, reliably, and timely</li>
                                    <li>Manage and maintain Asterisk Voice over IP servers (on-premise and hosted)</li>
                                        <li>Assist in setting up new functionality – WebRTC video calling, smartphone apps, HTML calling</li>
                                        <li>Provide technical support and troubleshooting on existing VoIP networks, services, system upgrades, and equipment to the customer.</li>
                                </ul>
                            </div>
                                <div className="flex-shrink-0"><span className="text-primary">February 2018 - July 2018</span></div>
                            </div>

                            <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">Software Developer</h3>
                                    <div className="subheading mb-3">Phimtaps</div>
                                    <ul>
                                        <li>Designed iOS apps.</li>
                                        <li>Developed backend API written in Python Django.</li>
                                        <li>Corrected errors by making appropriate changes and rechecking the program to ensure that the desired results are produced.</li>
                                        <li>Conducted trial runs of application to be sure they will deliver proper content.</li>
                                        <li>Performed revision, repair, or expansion of existing programs to increase operating efficiency or adapt to new requirements.</li>
                                        <li>Administered system analysis and programming tasks to maintain and control to use a network server.</li>
                                        <li>Investigated whether networks, host server, or peripheral equipment are properly responding to the program instructions.</li>
                                        <li>Diagnosed, troubleshoot, and resolved hardware, software, or other network and system problems.</li>
                                    </ul>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">June 2015 - June 2016</span></div>
                            </div>

                        </div>
                    </div>
            </React.Fragment>
        );
    }
};

export default connect()(Experience);