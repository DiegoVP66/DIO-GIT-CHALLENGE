import DevImg from "assets/img/devimg.svg";

import "./styles.css";

const About = () => {
  return (
    <div className="container base-card bg-dark about-container">
      <div className="about-img base-card">
        <img src={DevImg} alt="" />
      </div>
      <div>
        <h1>About me</h1>
        <p>
          {" "}
          My name is Diego Vicente Pereira. I am a systems analysis and
          development student, and a technology enthusiast. I have the will and
          determination to learn, evolve and improve myself, I also like to face
          challenges and I am looking for an opportunity in the job market as an
          IT developer
        </p>
      </div>
    </div>
  );
};

export default About;
