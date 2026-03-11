import { useLocation, useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');

            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="hero">
            <div className="container hero-content">
                <h2>
                    Hi, I’m <span>Yan Kai</span>
                </h2>
                <p className="hero-description">
                    A Year 3 Infocomm and Media Engineering student from Nanyang Polytechnic
                    who enjoys building practical projects and improving through hands-on learning.
                </p>

                <div className="hero-buttons">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => goToSection('projects')}
                    >
                        View Projects
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => goToSection('contact')}
                    >
                        Contact Me
                    </button>

                    <a
                        href="/Portfolio/YanKai_Resume.pdf"
                        download
                        className="btn btn-outline"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;