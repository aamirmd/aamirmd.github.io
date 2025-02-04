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
                    <Section
                        id="about"
                        title="About Me"
                        content="This is about me"
                    />
                    <Section
                        id="resources"
                        title="Resources"
                        content="These are resources"
                    />
                </div>
            </div>
        </Router>
    );
}

const styles = {
    container: {
        display: "flex",
    },
    content: {
        marginLeft: "220px", // account for the navbar width
        padding: "20px",
        flex: 1,
    },
};

export default App;
