import { Link } from 'react-router-dom';

function CineTrack() {
    return (
        <section className="project-page">
            <div className="container">
                <Link to="/" className="back-link">← Back to Portfolio</Link>

                <div className="project-header">
                    <p className="project-tag">Web API Development Project</p>
                    <h1>CineTrack</h1>
                    <p className="project-intro">
                        CineTrack is a movie web application developed to provide users with
                        a clean and responsive platform to explore movie-related content.
                        The project focused on frontend-backend integration, API handling,
                        and building a more structured web experience using modern web technologies.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>
                    <p>
                        The goal of CineTrack was to create a movie-based web application that
                        allows users to browse and view movie information through an interactive
                        and user-friendly interface. This project helped strengthen my understanding
                        of how APIs, frontend components, and backend logic work together in a real application.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Responsive interface for browsing movie content</li>
                        <li>Structured movie detail pages</li>
                        <li>Frontend and backend integration</li>
                        <li>API-based data retrieval and display</li>
                        <li>Clean navigation and organized layout</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>jQuery</span>
                        <span>Web API</span>
                        <span>JSON</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through CineTrack, I gained more hands-on experience in structuring a web project,
                        handling API data, and designing pages that are easier for users to navigate.
                        I also learned how frontend and backend parts of a project connect together,
                        which gave me a better understanding of practical web development workflow.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One of the challenges in this project was making sure the data flowed correctly
                        between different parts of the application and presenting it in a clear format.
                        I also had to think carefully about page structure, component organization,
                        and maintaining a clean design while implementing the required functionality.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        CineTrack helped me strengthen my confidence in web development by allowing me
                        to apply what I learned in a more practical way. It reflects my ability to build
                        a functional web application, work with APIs, and improve both technical and design-related skills.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CineTrack;