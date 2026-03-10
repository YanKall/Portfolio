import { Link } from 'react-router-dom';
import homepage from '../assets/SnakeGame/homepage.png';
import game from '../assets/SnakeGame/game.png';
import difficulty from '../assets/SnakeGame/difficulty.png';

function SnakeGame() {
    return (
        <section className="project-page">
            <div className="container">
                <Link to="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                <div className="project-header">
                    <p className="project-tag">Game Development Project</p>
                    <h1>Snake Game</h1>
                    <p className="project-intro">
                        This project is a desktop implementation of the classic Snake game
                        developed using C# in Visual Studio. The game allows players to control
                        the snake, collect food, and avoid collisions while progressing through
                        different difficulty levels.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Project Overview</h2>

                    <img
                        src={homepage}
                        alt="Snake Game Homepage"
                        className="project-image"
                    />

                    <p>
                        The goal of this project was to recreate the classic Snake game
                        while adding additional features that enhance the user experience.
                        Players control a snake that grows longer as it consumes food,
                        and the game ends if the snake collides with itself or the
                        boundaries of the play area. The project focuses on implementing
                        game logic, handling real-time user input, and maintaining
                        dynamic game states.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Classic Snake gameplay mechanics</li>
                        <li>Multiple difficulty levels</li>
                        <li>Score tracking with a scoreboard system</li>
                        <li>Real-time keyboard input for player control</li>
                        <li>Music when in menu for immersion</li>
                    </ul>
                </div>

                <div className="project-section">
                    <h2>Application Interface</h2>

                    <img
                        src={difficulty}
                        alt="Snake Game menu screen"
                        className="project-image"
                    />

                    <img
                        src={game}
                        alt="Snake Game"
                        className="project-image"
                    />

                    <p>
                        The interface was designed to be simple and intuitive,
                        allowing users to quickly start the game, select a
                        difficulty level, and view their score during gameplay.
                        The layout focuses on clarity so players can easily
                        track the snake's movement and current score.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Technologies Used</h2>
                    <div className="tech-list">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>Visual Studio</span>
                    </div>
                </div>

                <div className="project-section">
                    <h2>What I Learned</h2>
                    <p>
                        Through this project, I strengthened my understanding of
                        programming fundamentals such as loops, conditionals,
                        event handling, and object-oriented design. I also gained
                        experience implementing game logic and managing dynamic
                        updates to the game state based on user input.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Challenges</h2>
                    <p>
                        One of the main challenges was implementing collision
                        detection and ensuring the snake's movement remained
                        smooth and responsive. Managing the increasing length
                        of the snake and updating the game state correctly
                        also required careful logic and testing.
                    </p>
                </div>

                <div className="project-section">
                    <h2>Outcome</h2>
                    <p>
                        The project successfully recreates the classic Snake
                        gameplay experience while demonstrating fundamental
                        programming concepts and problem-solving skills.
                        It highlights my ability to design interactive
                        applications and implement structured game logic
                        using C#.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SnakeGame;