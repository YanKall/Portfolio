import { Link } from 'react-router-dom';

function DiscoverSG() {
  return (
    <section className="project-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Portfolio</Link>

        <div className="project-header">
          <p className="project-tag">Full-Stack Web Development Project</p>
          <h1>DiscoverSG</h1>
          <p className="project-intro">
            DiscoverSG is a full-stack web application for travel recommendations,
            built together with students from my class and the School of Business Management.
            It enables users to discover things to do across Singapore by providing
            recommendations based on users&apos; interests, budget, and preferred locations.
          </p>
        </div>

        <div className="project-section">
          <h2>Project Overview</h2>

          <iframe
            className="project-video"
            src="https://www.youtube.com/embed/85Ic-75iWxk"
            title="DiscoverSG Demo"
            allowFullScreen
          ></iframe>

          <p>
            The goal of DiscoverSG was to create a localized travel recommendation
            platform that makes it easier for users to explore activities in Singapore.
            Instead of searching through many different sources, users can receive
            activity suggestions in one place based on their personal preferences.
            The project also gave me experience working on a collaborative full-stack
            application with both technical and user-focused considerations.
          </p>
        </div>

        <div className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>Personalized activity recommendations based on user interests</li>
            <li>Budget-based filtering for activity suggestions</li>
            <li>Location-based recommendations across Singapore</li>
            <li>Activity browsing and booking functionality</li>
            <li>Localized platform focused on Singapore travel experiences</li>
          </ul>
        </div>

        <div className="project-section">
          <h2>Application Interface</h2>

          {/* Uncomment these when you add screenshots */}
          {/* <img
                        src={discoverRecommendations}
                        alt="DiscoverSG recommendations page"
                        className="project-image"
                    />

                    <img
                        src={discoverBooking}
                        alt="DiscoverSG booking page"
                        className="project-image"
                    /> */}

          <p>
            The application interface was designed to help users easily browse
            recommended activities, filter options based on their preferences,
            and view information in a more organized and convenient way.
          </p>
        </div>

        <div className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-list">
            <span>ReactJS</span>
            <span>ExpressJS</span>
            <span>NodeJS</span>
            <span>MySQL</span>
            <span>DigitalOcean</span>
          </div>
        </div>

        <div className="project-section">
          <h2>What I Learned</h2>
          <p>
            Through DiscoverSG, I gained more experience in full-stack web development
            and working as part of a collaborative team. I learned more about connecting
            frontend and backend components, managing data with MySQL, and building
            features that focus on user needs. This project also helped me better understand
            how a real-world web application can be structured and deployed.
          </p>
        </div>

        <div className="project-section">
          <h2>Challenges</h2>
          <p>
            One of the challenges in this project was designing a system that could provide
            useful and relevant recommendations while keeping the platform simple and easy to use.
            Working on a collaborative project also required coordination between team members,
            clear communication, and careful integration of different parts of the application.
            Ensuring smooth interaction between the frontend, backend, and database was also an
            important part of the development process.
          </p>
        </div>

        <div className="project-section">
          <h2>Outcome</h2>
          <p>
            DiscoverSG reflects my ability to contribute to a full-stack web application
            that solves a practical problem. It demonstrates my experience with collaborative
            development, recommendation-focused features, and building a web platform using
            modern technologies such as ReactJS, ExpressJS, NodeJS, MySQL, and DigitalOcean.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DiscoverSG;