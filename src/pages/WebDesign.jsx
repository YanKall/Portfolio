import { Link } from "react-router-dom";
import stallHome from "../assets/WebDesign/homepage.png";
import map from "../assets/WebDesign/map.png";
import delivery from "../assets/WebDesign/delivery.png";
import featured from "../assets/WebDesign/featured.png";

function WebDesign() {
    return (
        <section className="project-page">
            <div className="container">
                <Link to="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                <div className="project-header">
                    <p className="project-tag">Web Design Project</p>
                    <h1>Food Stall Web Design</h1>
                    <p className="project-intro">
                        This project is a collection of web design work focused on
                        creating a website interface for a food stall at Nanyang
                        Polytechnic. The goal was to design an engaging and
                        structured layout that allows users to explore menu
                        options, understand the ordering process, and view the
                        delivery workflow through visual elements such as maps
                        and icons.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>
                    <img
                        src={stallHome}
                        alt="Food Stall Website Homepage"
                        className="project-image"
                    />
                    <p>
                        The project focused on designing a visually structured
                        website that showcases food items, ordering options,
                        and delivery information. Emphasis was placed on layout
                        planning, usability, and visual hierarchy to create a
                        clean and intuitive browsing experience for users.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Menu showcase highlighting featured dishes</li>
                        <li>Clear ordering instructions for users</li>
                        <li>Delivery process illustrated with maps and icons</li>
                        <li>Structured layout focused on usability</li>
                        <li>Responsive design considerations</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Application Interface</h2>

                    <img
                        src={map}
                        alt="Map Page"
                        className="project-image"
                    />

                    <img
                        src={delivery}
                        alt="Delivery Process"
                        className="project-image"
                    />

                    <img
                        src={featured}
                        alt="Featured Food"
                        className="project-image"
                    />

                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>UI Design</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through this project, I learned how to design user
                        interfaces that are both visually appealing and easy
                        to navigate. I also gained experience organizing page
                        layouts, structuring content clearly, and applying
                        design elements such as icons and maps to improve
                        user understanding.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One challenge was ensuring that the layout remained
                        visually balanced while presenting different types of
                        content such as menu items, ordering information, and
                        delivery details. Careful consideration was required
                        to maintain clarity and avoid overcrowding the design.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        This project helped strengthen my understanding of web
                        design principles and user interface structuring. It
                        demonstrates my ability to translate design ideas into
                        functional web layouts while focusing on usability and
                        visual clarity.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default WebDesign;