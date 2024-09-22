import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo-color.jpg";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className={classes.navsection}>
      <header className={classes.headersection}>
        <Link to="/">
          <img src={logoImage} alt="logo image" className={classes.logo} />
        </Link>
        <nav>
          <ul className={classes.navlist}>
            <li>
              <Link
                className={`${
                  path === "/analyze"
                    ? "text-blue-500 font-bold "
                    : "text-white"
                }`}
                to="/analyze"
              >
                Analyze
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path === "/contact" ? "text-blue-500 font-bold" : "text-white"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
