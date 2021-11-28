import React, { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <section id="navigation">
        <div
          className="nav-icon"
          onClick={() => {
            setClick(!click);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </section>
      <div id="nav-content" className={click ? "show" : ""}>
        <div
          className="close-btn"
          onClick={() => {
            setClick(!click);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <a
                  data-text="Home"
                  onClick={() => {
                    setClick(!click);
                  }}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  data-text="About"
                  onClick={() => {
                    setClick(!click);
                  }}
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  data-text="Projects"
                  onClick={() => {
                    setClick(!click);
                  }}
                  href="#"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  data-text="Contact"
                  onClick={() => {
                    setClick(!click);
                  }}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
