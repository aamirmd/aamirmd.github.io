import React from "react";

function Section({ id, title, content }) {
    return (
        <div id={id} style={styles.section}>
            <h2>{title}</h2>
            <p>{content}</p>
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
