import React from "react";
import { HashLink } from "react-router-hash-link";

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
