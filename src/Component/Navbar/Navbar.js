import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import top from '../top.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Collections
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                TheBrand
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo-top">
          <img src={top} alt="" />
        </div>

        <div>
          <ul className="nav-me">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                myaccount
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">logo</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">logo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
