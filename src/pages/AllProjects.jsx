import { Link } from 'react-router-dom';
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
        description:
            'A movie web application that showcases API integration and structured frontend design.',
        path: '/cinetrack',
        image: cineTrackImage,
    },
    {
        title: 'CareConnect',
        description:
            'A healthcare-focused mobile application designed to improve access to clinic information.',
        path: '/careconnect',
        image: careConnectImage,
    },
    {
        title: 'DiscoverSG',
        description:
            'A full-stack travel recommendation platform that helps users discover and book activities across Singapore based on interests, budget, and preferred locations.',
        path: '/discoversg',
        image: discoverSGImage,
    },
    {
        title: 'Snake Game',
        description:
            'A desktop implementation of the classic Snake game built in C# with difficulty levels and a scoreboard system.',
        path: '/snakegame',
        image: snakeGameImage,
    },
    {
        title: 'Hotel Website',
        description:
            'A responsive hotel website developed using HTML, CSS, JavaScript/jQuery, PHP, and MySQL.',
        path: '/hotelwebsite',
        image: hotelWebsiteImage,
    },
    {
        title: 'Food Stall Web Design',
        description:
            'A web design project focused on creating an interface for a food stall website, featuring menu showcases, ordering options, and delivery process visualization.',
        path: '/webdesign',
        image: webDesignImage,
    },
    {
        title: "Speech Pattern Analysis",
        description:
            "A Python machine learning project that analyses speech patterns to explore potential indicators of dementia.",
        path: "/pythonaudio",
        image: pythonAudio
    },
];

function AllProjects() {
    return (
        <section className="project-page">
            <div className="container">

                <Link to="/" className="back-link">
                    ← Back to Portfolio
                </Link>

                <h1 className="section-title">All Projects</h1>

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

export default AllProjects;