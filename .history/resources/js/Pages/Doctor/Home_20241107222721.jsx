import React, { useEffect, useState } from "react";

export default function Home() {
  const [viewer, setViewer] = useState(null);
  const [anno, setAnno] = useState(null);
  const [annotationMode, setAnnotationMode] = useState(false);
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    // Inicialización del visor OpenSeadragon
    const viewerInstance = OpenSeadragon({
      id: "openseadragon",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
      tileSources: "/storage/images/312426.dzi", // Ruta a tu archivo DZI
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 1,
      visibilityRatio: 1,
      zoomPerScroll: 2,
    });

    viewerInstance.addHandler("open", () => {
      // Inicializar Annotorious solo después de que la imagen se haya cargado
      const annotoriousInstance = OpenSeadragon.Annotorious(viewerInstance, {
        readOnly: false,
        allowEmpty: false,
      });

      annotoriousInstance.on("createAnnotation", (annotation) => {
        console.log("Anotación creada:", annotation);
        setAnnotations((prev) => [...prev, annotation]);
      });

      annotoriousInstance.on("updateAnnotation", (annotation) => {
        console.log("Anotación actualizada:", annotation);
        setAnnotations((prev) =>
          prev.map((a) => (a.id === annotation.id ? annotation : a))
        );
      });

      annotoriousInstance.on("deleteAnnotation", (annotation) => {
        console.log("Anotación eliminada:", annotation);
        setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
      });

      // Guardar las instancias de OpenSeadragon y Annotorious en el estado
      setViewer(viewerInstance);
      setAnno(annotoriousInstance);
    });

    viewerInstance.addHandler("open-failed", () => {
      console.log("Error al cargar la imagen.");
    });

    return () => {
      // Limpiar cuando el componente se desmonte
      if (viewerInstance) {
        viewerInstance.destroy();
      }
    };
  }, []);

  // Alternar el modo de anotación
  const toggleAnnotationMode = () => {
    setAnnotationMode((prevState) => {
      const newState = !prevState;
      if (anno) {
        // Activar o desactivar el modo de dibujo
        anno.setDrawingEnabled(newState);
      }
      if (viewer) {
        // Bloquear o habilitar la interacción con la imagen
        viewer.setMouseNavEnabled(!newState);
        viewer.innerTracker.setTracking(!newState);
      }
      return newState;
    });
  };

  // Mostrar las anotaciones
  useEffect(() => {
    console.log("Anotaciones actuales:", annotations);
  }, [annotations]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">OpenSeadragon con Annotorious</h1>
      <div>
        <button
          onClick={toggleAnnotationMode}
          className={`px-4 py-2 text-white rounded ${
            annotationMode ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {annotationMode
            ? "Deshabilitar modo de anotación"
            : "Habilitar modo de anotación"}
        </button>
      </div>
      <div
        id="openseadragon"
        className="w-full h-[600px] mt-4"
        style={{ border: "1px solid black" }}
      />
      <div id="annotations" className="mt-4">
        <h2>Anotaciones:</h2>
        <ul>
          {annotations.map((annotation, index) => (
            <li key={index}>
              <strong>Anotación {index + 1}</strong>
              <p>
                {annotation.body && annotation.body.length > 0
                  ? annotation.body[0].value
                  : "Sin texto"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
