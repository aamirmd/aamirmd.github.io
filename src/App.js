import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
    return (
        <Router>
            <div style={styles.container}>
                <Navbar />
                <div style={styles.content}>
                    <Section id="about" title="About Me" />
                    <Section id="resources" title="Resources" />
                </div>
            </div>
        </Router>
    );
}

const styles = {
    container: {
        display: "flex",
        "flex-direction": "column",
        gap: "20 px" /* Adds space between sections */,
    },
    content: {
        marginLeft: "220px", // account for the navbar width
        // padding: "20px",
        flex: 1,
    },
};

export default App;
