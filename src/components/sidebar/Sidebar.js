import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FiExternalLink } from "react-icons/fi";
import logo from "../images/logo.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img src={logo} />
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Diyor Kadirkulov
          </Link>
        </h1>
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          {" "}
          idevdiyor@gmail.com{" "}
        </p>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/idev07/"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://github.com/iDev07"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-github fa-lg"
              ></a>
            </li>

            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.instagram.com/diyor_r1ch/"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-instagram fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="mailto:idevdiyor@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              {" "}
              <a
                href="https://www.facebook.com/iDev07/"
                rel="opener noreferrer"
                target="_blank"
                class="fa fas fa-facebook fa-lg"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
