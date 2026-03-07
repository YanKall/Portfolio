import { Link } from 'react-router-dom';

function CareConnect() {
    return (
        <section className="project-page">
            <div className="container">
                <Link to="/" className="back-link">← Back to Portfolio</Link>

                <div className="project-header">
                    <p className="project-tag">Mobile App Development Project</p>
                    <h1>CareConnect</h1>
                    <p className="project-intro">
                        CareConnect is a healthcare-focused mobile application designed to help
                        users access useful medical and clinic-related information in a more convenient way.
                        The project focused on combining usability, location-based features,
                        and practical app design to solve real user needs.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>
                    <p>
                        The aim of CareConnect was to create a mobile application that makes
                        healthcare services more accessible and user-friendly. The project explored
                        how mobile development can be used to improve user convenience through clear interfaces,
                        useful data presentation, and features related to clinics and travel information.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Clinic information display</li>
                        <li>Map-based viewing of healthcare locations</li>
                        <li>Location-related functionality</li>
                        <li>User-friendly mobile interface</li>
                        <li>Practical design focused on accessibility and convenience</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-list">
                        <span>Flutter</span>
                        <span>Dart</span>
                        <span>Firebase</span>
                        <span>Google Maps API</span>
                        <span>Geolocation</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through CareConnect, I learned more about developing mobile applications
                        with practical user-focused features. I also gained experience working with
                        location-based services, healthcare-related datasets, and building interfaces
                        that prioritize clarity and usability.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One of the main challenges was handling and displaying structured clinic data
                        properly while keeping the app simple and easy to use. Integrating features such as maps,
                        geolocation, and healthcare information also required careful planning to ensure
                        the app remained organized and useful to the user.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        CareConnect reflects my ability to work on a mobile development project that
                        addresses a practical problem. It helped me improve my understanding of Flutter development,
                        data handling, and how to design features that are both functional and meaningful.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CareConnect;