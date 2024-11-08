// src/App.js
import React from 'react';
import OpenSeadragonViewer from '@/Pages/Doctor/Components/OpenSeadragonViewer';

const App = () => {
  const imageUrl = '/storage/images/312426.dzi'; // URL de tu imagen DZI (Deep Zoom Image)
  
  return (
    <div className="App">
      <h1>Visor OpenSeadragon con Anotaciones</h1>
      <OpenSeadragonViewer imageUrl={imageUrl} />
    </div>
  );
};

export default App;
