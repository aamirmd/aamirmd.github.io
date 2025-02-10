import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const data = {
    about: (
        <>
            <p>Welcome!</p>
            <p>
                My name is Mohamed Aamir. I am a Machine Learning Engineer &
                Data Scientist with a strong foundation in data analytics,
                machine learning, and software development. Currently pursuing
                an M.S. in Computer Science (Machine Learning) at Georgia Tech,
                I have experience applying ML models, predictive analytics, and
                data-driven solutions to real-world challenges.
            </p>
            <p>
                At Hughes Network Systems, I worked on machine learning model
                development, data pipeline automation, and cloud migration. I
                trained a neural network classifier in TensorFlow to reduce
                false consumer dispatches, achieving 83% accuracy and a 0.91
                F1-score on an imbalanced dataset. I also deployed ML models on
                consumer terminals using TensorFlow Lite (tflite) in C/C++ and
                designed a dataflow pipeline for rain fade prediction tool which
                would automate gateway switchover detection. Additionally, I
                contributed to the migration of an anomaly detection system from
                on-premises servers to Google Cloud Platform (GCP), improving
                scalability and efficiency.
            </p>
            <p>
                Beyond my industry experience, I am passionate about applying
                data science to unique problem spaces. I am working on an FPL
                Prediction Dashboard, where my teammate and I are building a
                machine learning model to predict fantasy football performance
                and designing an optimization algorithm for selecting the best
                roster. Additionally, I am working on an NCAA Football Program
                Valuation Model, which quantifies financial metrics for college
                football programs.
            </p>
            <p>
                <h4>Technical Skills & Tools</h4>
                <ul>
                    <li>
                        <em>Programming:</em> Python, Java, C/C++, SQL, React
                        JS, PySpark
                    </li>
                    <li>
                        <em>Machine Learning & Analytics:</em> TensorFlow,
                        PyTorch, scikit-learn, Facebook Prophet, Tableau
                    </li>
                    <li>
                        <em>Data Engineering:</em> Pandas, NumPy, Databricks,
                        GCP, BigQuery, Docker
                    </li>
                    <li>
                        <em>Cloud & Deployment:</em> Google Cloud Platform
                        (GCP), Microsoft Azure, TensorFlow Lite, FileZilla
                    </li>
                </ul>
            </p>
            <p>
                I enjoy working at the intersection of machine learning, data
                analytics, and cloud technologies, solving complex problems with
                a data-driven approach. I am looking for opportunities where I
                can apply my expertise in ML model development, predictive
                analytics, and scalable data solutions to drive meaningful
                impact.
            </p>
            <p>Let's connect!</p>
            <div className="social-links">
                <span padding="30px" margin="30px">
                    <a
                        href="https://www.linkedin.com/in/mohamed-aamir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <FaLinkedin size={50} />
                    </a>
                </span>
                <span padding="30px" margin="30px">
                    <a
                        href="https://github.com/aamirmd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github"
                    >
                        <FaGithub size={50} />
                    </a>
                </span>
            </div>
        </>
    ),
    resources: (
        <>
            <ul>
                <li>
                    <a
                        href="https://github.com/aamirmd/tutorials/blob/main/numpy_tutorial.ipynb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Numpy tutorial
                    </a>{" "}
                    (Work in progress)
                </li>
            </ul>
        </>
    ),
};

function Section({ id, title }) {
    return (
        <section id={id} style={styles[id]}>
            <h2>{title}</h2>
            {data[id]}
        </section>
    );
}

const styles = {
    about: {
        padding: "20px 20px 200px 20px",
        margin: "20px 20px 150px 20px",
        // borderBottom: "2px solid #ddd",
        height: "100vh", // Each section takes full viewport height
    },
    resources: {
        padding: "20px 20px 0px 20px",
        margin: "150px 20px 20px 20px",
        borderTop: "2px solid #ddd",
        height: "100vh", // Each section takes full viewport height
    },
};

export default Section;
