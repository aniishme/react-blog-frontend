import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// import logo from "./logo.PNG";

function Header() {
  return (
    <Fragment>
      <nav id="navbar">
        <Link to="/">
          {/* <img src={logo} alt="title"></img> */}
          <h2>LOGO</h2>
        </Link>

        <ul className="nav-items">
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
