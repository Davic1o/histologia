// resources/js/Pages/Welcome.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '../Components/header'; // Ajusta la ruta según la ubicación de Header.jsx
import Ini from '../Components/Ini'; // Ajusta la ruta según la ubicación de index.jsx
import ServicesSection from '../Components/ServicesSection';
import FooterP from '../Components/footerP'; // Ajusta la ruta según la ubicación de footer.jsx
import About from '../Components/About'; // Ajusta la ruta según la ubicación de About.jsx

const Welcome = ({ canLogin, canRegister, laravelVersion, phpVersion }) => {
  return (
    <div>
      {/* Incluir el componente Header */}
      <Header />
      {/*<Ini />
      <ServicesSection />*/}
      <About/>
      <FooterP />
      


      <h1>Welcome to Our Application</h1>
      <div>
        <p>Laravel Version: {laravelVersion}</p>
        <p>PHP Version: {phpVersion}</p>
      </div>

      <div>
        {canLogin && (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        )}
        {canRegister && (
          <Link href="/register" className="btn btn-secondary">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Welcome;
