import Rocket from "assets/img/rocket.svg";
import Challenge from "components/Challenge";
import About from "components/About";

import "./styles.css";
const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="home-about-container container" id="about">
        <About />
      </div>
      <hr />
      <div className="container mt-4 home-content base-card">
        <h1>GitHub Challenge</h1>
        <span> "My First Git Repository"</span>
        <p>
          The challenge is to create a GitHub repository with some information
          about the bootcamp and the courses I am studying.
        </p>
      </div>
      <div className="home-content-container">
        <div className="home-challenge-container" id="challenge">
          <Challenge />
        </div>
        <div className="home-img-container">
          <img src={Rocket} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
