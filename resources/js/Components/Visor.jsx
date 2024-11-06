import React, { useState } from 'react';

const Visor = () => {
  const [showAnnotationModal, setShowAnnotationModal] = useState(false);
  const [showSavedFormsModal, setShowSavedFormsModal] = useState(false);

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
              <span className="text-gray-500">Unable to open [object Object]: HTTP 0 attempting to load TileSource</span>
            </div>
          </section>

          {/* Buttons */}
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

        {/* Annotation Form Modal */}
        {showAnnotationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
              <h3 className="text-xl font-semibold mb-4">Formulario de Diagnóstico Patológico</h3>
              
              <div className="mt-4">
                <div className="border-b mb-4">
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Datos del Paciente
                  </button>
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Procedimiento y Muestra
                  </button>
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Descripción Macroscópica
                  </button>
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Descripción Microscópica
                  </button>
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Pruebas y Biomarcadores
                  </button>
                  <button className="px-4 py-2 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Diagnóstico y Recomendaciones
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre Completo" 
                      className="border rounded px-3 py-2 w-full"
                    />
                    <input 
                      type="date"
                      className="border rounded px-3 py-2 w-full"
                    />
                    <input 
                      type="text"
                      placeholder="ID del Paciente"
                      className="border rounded px-3 py-2 w-full"
                    />
                  </div>
                  {/* Other form sections... */}
                </div>

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
          </div>
        )}

        {/* Saved Forms Modal */}
        {showSavedFormsModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Formularios Guardados</h3>
              <div id="savedFormsDetails" className="mt-4">
                {/* Aquí se mostrarían los formularios guardados */}
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