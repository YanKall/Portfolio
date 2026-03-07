import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="header">
            <nav className="navbar container">
                <Link to="/" className="logo">Yan Kai</Link>

                <ul className="nav-links">
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;