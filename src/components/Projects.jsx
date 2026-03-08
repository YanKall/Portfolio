import { Link } from 'react-router-dom';
import cineTrackImage from '../assets/CineTrack/homepage.png';
import careConnectImage from '../assets/CareConnect/homepage.png';

const projectData = [
    {
        title: 'CineTrack',
        description:
            'A movie web application that showcases API integration, structured frontend design, and practical web development skills.',
        path: '/cinetrack',
        image: cineTrackImage,
    },
    {
        title: 'CareConnect',
        description:
            'A healthcare-focused mobile application designed to improve access to clinic-related information and location-based services.',
        path: '/careconnect',
        image: careConnectImage,
    },
];

function Projects() {
    return (
        <section id="projects" className="section alt-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="project-grid">
                    {projectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-thumbnail"
                                />
                            )}

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Link to={project.path}>View Project</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;