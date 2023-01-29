import styles from "./Nav.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import React from "react";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Accommodation from "../../pages/accommodation/Accommodation";

function Nav() {
  return (
    <Router>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/accommodation">Accommodation</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Nav;
