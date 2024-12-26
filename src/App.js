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
                        id="home"
                        title="Home"
                        content="Welcome to the Home section!"
                    />
                    <Section
                        id="about"
                        title="About"
                        content="Here is the About section."
                    />
                    <Section
                        id="contact"
                        title="Contact"
                        content="This is the Contact section."
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
