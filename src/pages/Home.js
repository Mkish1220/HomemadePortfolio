import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Meaghan</h2>
                <div className="prompt">
                    <p>A software developer with a passion for problem solving while learning and creating new things</p>
                {/* <LinkedInIcon />
                <EmailIcon />
                <GithubIcon /> */}
                </div>
            </div>
            <div className="skills">
                <h1>skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI, StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJs, ExpressJs, GraphQL, ApolloServer, MySQL, MongoDB, DBeaver, AWS, SQl
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Javascript, HTML, CSS, React</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;