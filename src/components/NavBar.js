import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "./img/logo2.png";

const NavBar = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <>
      <div className="main-nav-bar">
        <Link to="/">
          <img src={logo} alt="company logo" className="navbar-logo"></img>
        </Link>

        <nav>
          <ul
            className={mobileView ? "hamburger-menu-list" : "menu-list"} /* using UseState hook to change navBar to mobile view */
            onClick={() => setMobileView(false)}
          >
            <li>
              <Link className="menu-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/Menu-2">
                Menu 2
              </Link>
            </li>
            <li>
              <Link className="menu-links" to="/Menu-3">
                Menu 3
              </Link>
            </li>
            <button className="login-button">Login</button>
          </ul>

          <button
            className="hamburger-menu-icon"
            onClick={() => setMobileView(!mobileView)} /* onClick toggles the hamburger icon to show menu list */
          >
            {mobileView ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>

        </nav>
      </div>
    </>
  );
};

export default NavBar;
