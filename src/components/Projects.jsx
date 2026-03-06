const projectData = [
    {
        title: 'Movie Review Website',
        description:
            'A responsive website that displays movie information and allows users to explore movie content with a clean interface.',
        link: '#',
    },
    {
        title: 'Web API Development Project',
        description:
            'A backend-focused project involving API endpoints, data handling, and integration with frontend features.',
        link: '#',
    },
    {
        title: 'Mobile App Project',
        description:
            'A practical application project focused on solving user problems with a simple and user-friendly design.',
        link: '#',
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
                            <a href={project.link} target="_blank" rel="noreferrer">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;