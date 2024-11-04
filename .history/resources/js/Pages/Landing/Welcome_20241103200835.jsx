// resources/js/Pages/Welcome.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '../Components/header'; // Ajusta la ruta según la ubicación de Header.jsx
import Ini from '../Components/Ini'; // Ajusta la ruta según la ubicación de index.jsx
import ServicesSection from '../Components/ServicesSection';
import FooterP from '../Components/footerP'; // Ajusta la ruta según la ubicación de footer.jsx
import About from '../Components/About'; // Ajusta la ruta según la ubicación de About.jsx
import Proyectos from '../Components/Proyectos'; // Ajusta la ruta según la ubicación de Proyectos.jsx
import Contacts from '../Components/Contacts'; // Ajusta la ruta según la ubicación de Contacts.jsx
const Welcome = ({ canLogin, canRegister, laravelVersion, phpVersion }) => {
  return (
    <div>
      <Header />

      <Contacts/>
      
      <FooterP />
      
    </div>
  );
};

export default Welcome;
