/*import "./Navbar.css";

export default function Navbar({ setCurrentPage }) {
  const visitHome = (e) => {
    setCurrentPage("Accueil");
    e.preventDefault();
  };
  const visitActivites = (e) => {
    setCurrentPage("Activités");
    e.preventDefault();
  };
  const visitContact = (e) => {
    setCurrentPage("Contact");
    e.preventDefault();
  };
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img
          className="logo"
          src="../../src/images/image.png"
          alt="Logo plage"
        />
        <ul>
          <li>
            <a href="#" onClick={visitHome}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#" onClick={visitActivites}>
              Activites
            </a>
          </li>
          <li>
            <a href="#" onClick={visitContact}>
              Contact et témoignages
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
*/
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img
          className="logo"
          src="../../src/images/image.png"
          alt="Logo plage"
        />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/activites">Activités</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
