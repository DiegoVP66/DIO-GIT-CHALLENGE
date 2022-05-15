import Git from "assets/img/gitHub.svg";
import In from "assets/img/linkedin.svg";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="fotter-content">
        <h4>Diego Vicente Pereira</h4>
        <div className="footer-img">
          <a href="https://github.com/DiegoVP66">
            <img src={Git} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/diego-vicente-pereira-212647212/">
            <img src={In} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
