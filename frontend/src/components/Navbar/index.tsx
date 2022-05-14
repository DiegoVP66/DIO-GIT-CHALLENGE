import "bootstrap/js/src/collapse.js";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container main-nav effects">
        <img
          src="https://hermes.digitalinnovation.one/assets/diome/logo.svg"
          alt=""
        />

        <h3 className="text-white">Git Challenge</h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#git-navbar"
          aria-controls="git-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse menu-container"
          id="git-navbar"
        >
          <ul className="navbar-nav main-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#challenge">Challenge</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
