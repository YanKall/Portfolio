import { Link } from 'react-router-dom';

const projectData = [
    {
        title: 'CineTrack',
        description:
            'A movie web application that showcases API integration, structured frontend design, and practical web development skills.',
        path: '/cinetrack',
    },
    {
        title: 'CareConnect',
        description:
            'A healthcare-focused mobile application designed to improve access to clinic-related information and location-based services.',
        path: '/careconnect',
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