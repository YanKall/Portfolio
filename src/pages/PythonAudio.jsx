import { Link } from "react-router-dom";

function PythonAudio() {
    return (
        <section className="project-page">
            <div className="container">

                <Link to="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                <div className="project-header">
                    <p className="project-tag">Machine Learning Project</p>
                    <h1>Speech Pattern Analysis for Dementia Detection</h1>
                    <p className="project-intro">
                        This project explores the use of machine learning and audio
                        analysis to support early detection of potential dementia
                        symptoms. By analysing speech patterns, the system aims to
                        identify subtle linguistic and acoustic changes that may
                        indicate cognitive decline.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>

                    <iframe
                        className="project-video"
                        src="https://www.youtube.com/embed/nlfRg3bfprA"
                        title="ETT Demo"
                        allowFullScreen
                    ></iframe>

                    <p>
                        The project involved developing a data processing pipeline
                        that extracts speech features from recorded audio samples.
                        These features were then analysed using machine learning
                        techniques to identify patterns that may correlate with
                        cognitive impairment. The system aims to assist healthcare
                        professionals by providing an additional data-driven
                        perspective when evaluating speech behaviour.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Speech feature extraction from audio recordings</li>
                        <li>Data preprocessing and analysis using Python</li>
                        <li>Machine learning model for pattern detection</li>
                        <li>Structured data pipeline for processing audio data</li>
                        <li>Visualisation of analysis results</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Application Interface</h2>

                    <p>
                        The application interface was designed to visualise the audio processing
                        pipeline and machine learning workflow, helping users understand how
                        speech data is analysed to detect patterns indicative of potential
                        cognitive decline.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>

                    <div className="tech-list">
                        <span>Python</span>
                        <span>Machine Learning</span>
                        <span>Data Analysis</span>
                        <span>Audio Processing</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through this project, I gained experience working with
                        machine learning workflows, data preprocessing, and
                        analysing audio-based datasets. It helped me better
                        understand how machine learning models can be applied to
                        real-world healthcare challenges.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One of the main challenges was handling audio data and
                        extracting meaningful features that could be used by the
                        machine learning model. Ensuring the dataset was properly
                        cleaned and structured also required careful preprocessing
                        before training the model.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        This project demonstrated how machine learning techniques
                        can be applied to healthcare-related problems. It also
                        strengthened my understanding of data pipelines, feature
                        extraction, and model development using Python.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default PythonAudio;