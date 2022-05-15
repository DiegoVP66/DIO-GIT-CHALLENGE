import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin/auth">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
