const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'SQL',
    'Python',
    'Flutter',
    'UiPath',
];

function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;