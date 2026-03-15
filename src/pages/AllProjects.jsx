import { Link } from 'react-router-dom';
import { useState } from "react";
import cineTrackImage from '../assets/CineTrack/homepage.png';
import careConnectImage from '../assets/CareConnect/homepage.png';
import discoverSGImage from '../assets/DiscoverSG/homepage.png';
import snakeGameImage from '../assets/SnakeGame/game.png';
import hotelWebsiteImage from '../assets/HotelWebsite/homepage.png';
import webDesignImage from '../assets/WebDesign/homepage.png';
import pythonAudio from "../assets/PythonAudio/overview.png";

const projectData = [
    {
        title: 'CineTrack',
        description: 'A movie web application that showcases API integration and structured frontend design.',
        path: '/cinetrack',
        image: cineTrackImage,
        category: 'web'
    },
    {
        title: 'CareConnect',
        description: 'A healthcare-focused mobile application designed to improve access to clinic information.',
        path: '/careconnect',
        image: careConnectImage,
        category: 'mobile'
    },
    {
        title: 'DiscoverSG',
        description: 'A full-stack travel recommendation platform.',
        path: '/discoversg',
        image: discoverSGImage,
        category: 'web'
    },
    {
        title: 'Snake Game',
        description: 'Classic snake game built in C#.',
        path: '/snakegame',
        image: snakeGameImage,
        category: 'game'
    },
    {
        title: 'Hotel Website',
        description: 'Responsive hotel website using PHP and MySQL.',
        path: '/hotelwebsite',
        image: hotelWebsiteImage,
        category: 'web'
    },
    {
        title: 'Food Stall Web Design',
        description: 'UI web design project.',
        path: '/webdesign',
        image: webDesignImage,
        category: 'web'
    },
    {
        title: 'Speech Pattern Analysis',
        description: 'Python machine learning project analysing speech patterns.',
        path: '/pythonaudio',
        image: pythonAudio,
        category: 'machine-learning'
    }
];

function AllProjects() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState("all");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProjects = projectData.filter(project => {

        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter =
            filter === "all" || project.category === filter;

        return matchesSearch && matchesFilter;

    });


    return (
        <section className="project-page">
            <div className="container">

                <Link to="/" className="back-link">
                    ← Back to Portfolio
                </Link>

                {/* filter buttons */}
                <div className="project-filters">

                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("web")}>Web</button>
                    <button onClick={() => setFilter("mobile")}>Mobile</button>
                    <button onClick={() => setFilter("machine-learning")}>Machine Learning</button>
                    <button onClick={() => setFilter("game")}>Game</button>

                </div>

                {/* search bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                <p className="project-count">
                    {filteredProjects.length} project(s) found
                </p>

                <h1 className="section-title">All Projects</h1>

                <div className="project-grid">
                    {filteredProjects.map((project, index) => (
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

export default AllProjects;