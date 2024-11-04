// resources/js/Pages/Welcome.jsx
import React from 'react';
import Header from '@/Components/header'; // Ajusta la ruta según la ubicación de Header.jsx
import FooterP from '../Components/footerP'; // Ajusta la ruta según la ubicación de footer.jsx
import Contacts from '../Components/Contacts'; // Ajusta la ruta según la ubicación de Contacts.jsx
const Welcome = () => {
  return (
    <div>
      <Header />
      <FooterP />
      
    </div>
  );
};

export default Welcome;
