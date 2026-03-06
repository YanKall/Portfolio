function Navbar() {
    return (
        <header className="header">
            <nav className="navbar container">
                <h1 className="logo">Yan Kai</h1>

                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;