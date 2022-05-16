import { NavLink, useNavigate } from "react-router-dom";
import { removeAuthData } from "util/storage";
import { useContext, useEffect } from "react";
import { AuthContext } from "AuthContextData";
import { getTokenData } from "util/token";
import { isAuthenticated } from "util/auth";
import "bootstrap/js/src/collapse.js";
import "./styles.css";

const Navbar = () => {
  const history = useNavigate();

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history("/");
  };
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
              <a href="#progress">Progress</a>
            </li>
          </ul>
          <div className="btn-login-container">
            {authContextData.authenticated ? (
              <div className="logout-container">
                <a href="#logout" onClick={handleLogoutClick}>
                  LOGOUT
                </a>
              </div>
            ) : (
              <NavLink to="/admin/auth">LOGIN</NavLink>
            )}
          </div>
          <div className="crud-panel">
            {authContextData.authenticated ? (
              <>
                <NavLink to="/admin/courses">ADM</NavLink>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
