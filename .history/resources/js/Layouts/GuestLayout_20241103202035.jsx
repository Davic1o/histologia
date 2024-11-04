// resources/js/Pages/Welcome.jsx
import React from 'react';
import Header from '@/Components/header'; 
import FooterP from '@/Components/footerP'; 
const Welcome = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <FooterP />
      
    </div>
  );
};

export default Welcome;
