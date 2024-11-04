// resources/js/Components/Header.jsx
import React from 'react';
import "../../css/Header.css"; // Ruta al archivo CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from '@inertiajs/react';

const Header = () => {
  return (
    <header className="header">
      <div className="rd-navbar-main-outer">
        <div className="rd-navbar-main">
          <div className="rd-navbar-nav-wrap">
            {/* Menú de navegación */}
            <ul className="rd-navbar-nav">
              <li className="rd-nav-item"><Link className="rd-nav-link" href="Ini.jsx">INICIO</Link></li>
              <li className="rd-nav-item"><Link className="rd-nav-link" href="about.html">GENTE</Link></li>
              <li className="rd-nav-item"><Link className="rd-nav-link" href="typography.html">PROYECTOS I+D</Link></li>
              <li className="rd-nav-item"><Link className="rd-nav-link" href="contact-us.html">CONTACTOS</Link></li>
            </ul>
            {/* Lista de iconos sociales */}
            <ul className="rd-navbar-corporate-list-social">
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a></li>
              <li><a href="#" className="icon"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><Link href="/register" className="icon" title="Registrar"><FontAwesomeIcon icon={faUserPlus} /></Link></li>
              <li><Link href="/login" className="icon" title="Iniciar sesión"><FontAwesomeIcon icon={faSignInAlt} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
