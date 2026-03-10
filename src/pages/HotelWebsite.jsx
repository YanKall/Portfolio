import { Link } from "react-router-dom";
import hotelImage from "../assets/HotelWebsite/homepage.png";
import login from "../assets/HotelWebsite/login.png";
import register from "../assets/HotelWebsite/register.png";
import booking from "../assets/HotelWebsite/booking.png";
import featured from "../assets/HotelWebsite/featured.png";

function HotelWebsite() {
    return (
        <section className="project-page">
            <div className="container">
                <Link to="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                <div className="project-header">
                    <p className="project-tag">Full Stack Web Development Project</p>
                    <h1>Hotel Booking Website</h1>
                    <p className="project-intro">
                        This project is a responsive hotel booking website developed using
                        HTML, CSS, JavaScript/jQuery, PHP, and MySQL. The platform allows users
                        to browse hotel information and interact with the website through a
                        structured and user-friendly interface across different devices.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>
                    <img
                        src={hotelImage}
                        alt="Hotel Website Homepage"
                        className="project-image"
                    />
                    <p>
                        The project began with designing wireframes and a sitemap to plan the
                        structure and navigation of the website. After the planning stage,
                        the website was built from scratch with responsive layouts to ensure
                        compatibility with mobile phones, tablets, and desktop devices.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Responsive layout for mobile, tablet, and desktop</li>
                        <li>User login and registration system</li>
                        <li>Interactive booking interface</li>
                        <li>Structured navigation based on sitemap planning</li>
                        <li>Frontend interaction using JavaScript and jQuery</li>
                        <li>Backend functionality implemented with PHP and MySQL</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Application Interface</h2>

                    <img
                        src={login}
                        alt="Login Page"
                        className="project-image"
                    />

                    <img
                        src={register}
                        alt="Register Page"
                        className="project-image"
                    />

                    <img
                        src={booking}
                        alt="Booking Page"
                        className="project-image"
                    />

                    <img
                        src={featured}
                        alt="Featured Hotels"
                        className="project-image"
                    />
                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>jQuery</span>
                        <span>PHP</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through this project, I gained experience designing and developing a
                        full website from scratch. I learned how to plan website structure
                        using wireframes and sitemaps, implement responsive layouts, and
                        connect frontend components with backend functionality using PHP
                        and MySQL.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One challenge during this project was ensuring that the website layout
                        remained responsive across different screen sizes. I also had to ensure
                        that the frontend interactions and backend logic worked together smoothly
                        to provide a consistent user experience.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        This project strengthened my understanding of full-stack web development
                        and allowed me to apply concepts such as responsive design, database
                        integration, and frontend-backend interaction in a practical scenario.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default HotelWebsite;