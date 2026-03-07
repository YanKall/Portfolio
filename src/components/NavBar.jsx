import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
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
        <header className="header">
            <nav className="navbar container">
                <Link to="/" className="logo">Yan Kai</Link>

                <ul className="nav-links">
                    <li>
                        <button type="button" className="nav-btn" onClick={() => goToSection('about')}>
                            About
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-btn" onClick={() => goToSection('projects')}>
                            Projects
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-btn" onClick={() => goToSection('skills')}>
                            Skills
                        </button>
                    </li>
                    <li>
                        <button type="button" className="nav-btn" onClick={() => goToSection('contact')}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;