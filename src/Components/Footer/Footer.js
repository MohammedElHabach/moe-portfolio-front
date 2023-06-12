import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      <div className={isHomePage ? 'footer-home' : "footer-container " }>
        <Link to="/" className="footer-logo">
          <svg
            viewBox="0 0 640 512"
            style={{
              width: "1.25em",
              textRendering: "optimizeLegibility",
              font: "inherit",
              fontWeight: 400,
              cursor: "pointer",
              height: "1em",
              fontSize: "4em",
              overflow: "visible",
            }}
          >
            <path
              fill="#FFFFFD"
              d="M458.566 321.7c-19.552 0-37.558-10.598-46.947-27.745l-28.553-52.116-24.007 44.217c-12.003 23.505-45.69 26.588-57.886 3.179l-25.168-48.263-37.945 69.938-45.495.289 54.4-102.691c11.52-21.771 42.592-22.157 54.789-.77l27.104 47.78 26.33-47.684c11.807-21.386 42.783-21.483 54.591-.097l36.883 66.277c6.679 12.042 24.973 7.322 24.973-6.358l.096-88.144c0-32.753-26.813-59.437-59.725-59.437h-183.82c-32.911 0-59.724 26.684-59.724 59.437v152.782c0 32.756 26.813 59.44 59.725 59.44h246.642V432H228.187C172.915 432 128 387.302 128 332.294v-152.59C128 124.602 172.818 80 228.187 80h183.627C467.181 80 512 124.602 512 179.704v88.82c0 29.38-23.91 53.175-53.434 53.175z"
            ></path>
          </svg>
        </Link>
        <p>
          Living, learning, & leveling up <br /> one day at a time.
        </p>

        <div className="social-menu">
          <ul>
            <li>
              <Link target="_blank" to="https://www.linkedin.com/in/mohammed-el-habach-565633240/">
                <i className="fa-brands fa fa-linkedin-in"></i>
              </Link>
            </li>

            <li>
              <Link to="mailto:mhamadhabach06@gmail.com">
                <i className="fa-solid fa fa-at"></i>
              </Link>
            </li>

            <li>
              <Link target="_blank" to="https://gitlab.com/mhamadhabach06">
                <i className="fa-brands fa fa-gitlab"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
