function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <p className="hero-tag">React Portfolio</p>
                <h2>
                    Hi, I’m <span>Yan Kai</span>
                </h2>
                <p className="hero-description">
                    A Year 3 Infocomm and Media Engineering student from Nanyang Polytechnic
                    who enjoys building practical projects and improving through hands-on learning.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;