function Contact() {
    return (
        <section id="contact" className="section alt-section">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <p className="section-text">
                    Feel free to reach out for project opportunities or collaboration.
                </p>

                <div className="contact-box">
                    <p>
                        <strong>Email:</strong>{" "}
                        <a 
                            href="mailto:hoeyankai@gmail.com"
                            className="link"
                        >
                            hoeyankai@gmail.com
                        </a>
                    </p>

                    <p>
                        <strong>GitHub:</strong>{" "}
                        <a
                            href="https://github.com/YanKall"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            github.com/YanKall
                        </a>
                    </p>

                    <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a
                            href="https://www.linkedin.com/in/yan-kai-hoe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            linkedin.com/in/yan-kai-hoe
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;