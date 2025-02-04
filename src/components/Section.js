import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const data = {
    about: (
        <section>
            <p>Welcome!</p>
            <p>
                I'm Mohamed Aamir, a Data Science and Machine Learning
                enthusiast. I like solving problems using data and data
                analytics.
            </p>
            <p>
                Here are my 3 biggest life lessons.
                <ol>
                    <li>
                        Search for purpose in life instead of chasing after
                        happiness, for true happiness lies in living a
                        purposeful life.
                    </li>
                    <li>
                        Don't remind people about the favors you have done for
                        them.
                    </li>
                    <li>Be kind.</li>
                </ol>
            </p>
            <div className="social-links">
                <span padding="30px" margin="30px">
                    <a
                        href="https://www.linkedin.com/in/mohamed-aamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <FaLinkedin size={30} />
                    </a>
                </span>
                <span padding="30px" margin="30px">
                    <a
                        href="https://github.com/aamirmd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github"
                    >
                        <FaGithub size={30} />
                    </a>
                </span>
            </div>
        </section>
    ),
    resources: <p>This is also a paragraph about resources</p>,
};

function Section({ id, title, content }) {
    return (
        <div id={id} style={styles.section}>
            <h2>{title}</h2>
            <pre>{data[id]}</pre>
        </div>
    );
}

const styles = {
    section: {
        padding: "40px 20px",
        marginBottom: "40px",
        borderBottom: "2px solid #ddd",
        height: "100vh", // Each section takes full viewport height
    },
};

export default Section;
