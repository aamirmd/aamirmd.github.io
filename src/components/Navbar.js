import React from "react";
import { HashLink } from "react-router-hash-link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <div style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <HashLink to="#about" style={styles.navLink}>
                        About Me
                    </HashLink>
                </li>
                <li style={styles.navItem}>
                    <HashLink to="#resources" style={styles.navLink}>
                        Resources
                    </HashLink>
                </li>
                <li>
                    <div className="social-links">
                        <span padding="30px" margin="30px">
                            <a
                                href="https://www.linkedin.com/in/mohamed-aamir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin"
                            >
                                <FaLinkedin
                                    size={50}
                                    style={{ color: "white" }}
                                />
                            </a>
                        </span>
                        <span padding="30px" margin="30px">
                            <a
                                href="https://github.com/aamirmd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github"
                            >
                                <FaGithub
                                    size={50}
                                    style={{ color: "white" }}
                                />
                            </a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

const styles = {
    navbar: {
        width: "200px",
        backgroundColor: "#333",
        position: "fixed",
        top: "0",
        left: "0",
        height: "100vh",
        paddingTop: "20px",
        overflowY: "auto",
    },
    navList: {
        listStyle: "none",
        padding: "0",
    },
    navItem: {
        marginBottom: "20px",
    },
    navLink: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        padding: "10px",
        display: "block",
    },
};

export default Navbar;
