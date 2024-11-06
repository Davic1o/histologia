import React, { useState, useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import Annotorious from '@recogito/annotorious';

const Visor = () => {
  const [showAnnotationModal, setShowAnnotationModal] = useState(false);
  const [showSavedFormsModal, setShowSavedFormsModal] = useState(false);
  const osdRef = useRef(null);
  const annoRef = useRef(null);

  useEffect(() => {
    // Inicializar OpenSeadragon
    const viewer = OpenSeadragon({
      id: 'openseadragon1',
      tileSources: {
        // Aquí va la URL de la imagen .dzi que deseas cargar
        type: 'image',
        url: 'https://static-gcp.freepikcompany.com/web-app/media/freepik-7-2000.webp'
      },
      prefixUrl: 'https://openseadragon.github.io/openseadragon/images/'
    });

    // Guardar la referencia de OpenSeadragon
    osdRef.current = viewer;

    // Inicializar Annotorious sobre OpenSeadragon después de cargar la imagen
    viewer.addHandler('open', () => {
      const anno = new Annotorious({ 
        viewer, 
        widgets: ['COMMENT'] // Añadir un widget de comentario
      });
      annoRef.current = anno;
    });

    // Limpiar Annotorious al desmontar
    return () => {
      if (annoRef.current) annoRef.current.destroy();
      if (osdRef.current) osdRef.current.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <main className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 id="titulo" className="text-xl font-semibold mb-4">Visor de Imágenes</h4>
          <h6 id="cuerpo" className="text-gray-600 mb-6"></h6>

          {/* Visor Section */}
          <section className="flex justify-center items-center mb-6">
            <div 
              id="openseadragon1" 
              className="bg-gray-200 rounded-lg w-[870px] h-[550px] flex items-center justify-center"
            >
              <span className="text-gray-500">Cargando imagen...</span>
            </div>
          </section>

          {/* Botones */}
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setShowAnnotationModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Guardar Anotaciones
            </button>
            <button 
              onClick={() => setShowSavedFormsModal(true)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Ver Formularios Guardados
            </button>
          </div>
        </div>

        {/* Modales para guardar anotaciones y ver formularios guardados */}
        {showAnnotationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
              <h3 className="text-xl font-semibold mb-4">Formulario de Diagnóstico Patológico</h3>
              {/* Formulario de anotaciones */}
              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setShowAnnotationModal(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}

        {showSavedFormsModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Formularios Guardados</h3>
              <div id="savedFormsDetails" className="mt-4">
                <p className="text-gray-500">No hay formularios guardados.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Visor;
