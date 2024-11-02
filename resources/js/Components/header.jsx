// resources/js/Components/Header.jsx
import React from 'react';
import "../../css/Header.css"; // Ruta al archivo CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="rd-navbar-main-outer">
        <div className="rd-navbar-main">
          <div className="rd-navbar-nav-wrap">
            {/* Menú de navegación */}
            <ul className="rd-navbar-nav">
              <li className="rd-nav-item"><a className="rd-nav-link" href="index.html">INICIO</a></li>
              <li className="rd-nav-item"><a className="rd-nav-link" href="about.html">GENTE</a></li>
              <li className="rd-nav-item"><a className="rd-nav-link" href="typography.html">PROYECTOS I+D</a></li>
              <li className="rd-nav-item"><a className="rd-nav-link" href="contact-us.html">CONTACTOS</a></li>
            </ul>
            {/* Lista de iconos sociales */}
            <ul className="rd-navbar-corporate-list-social">
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="login.html" className="icon" title="Iniciar sesión"><FontAwesomeIcon icon={faSignInAlt} /></a></li>
              <li><a href="#" className="icon" title="Cerrar sesión" style={{ display: 'none' }}><FontAwesomeIcon icon={faSignOutAlt} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
