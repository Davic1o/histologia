import React, { useEffect, useState } from "react";

export default function Home() {
  const [viewer, setViewer] = useState(null);
  const [anno, setAnno] = useState(null);
  const [annotationMode, setAnnotationMode] = useState(false);
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    // Inicializar OpenSeadragon
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
      // Inicializar Annotorious después de que OpenSeadragon haya cargado
      const annotoriousInstance = OpenSeadragon.Annotorious(viewerInstance, {
        readOnly: false,
        allowEmpty: false,
      });

      // Verificar que Annotorious esté listo
      console.log("Annotorious instance:", annotoriousInstance);

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

      setViewer(viewerInstance);
      setAnno(annotoriousInstance);
    });

    viewerInstance.addHandler("open-failed", () => {
      console.log("Error al cargar la imagen.");
    });

    return () => {
      viewerInstance.destroy();
    };
  }, []);

  // Función para alternar el modo de anotación
  const toggleAnnotationMode = () => {
    setAnnotationMode((prevState) => {
      const newState = !prevState;
      if (anno) {
        // Habilitar o deshabilitar el modo de dibujo
        anno.setDrawingEnabled(newState);

        if (newState) {
          // Bloquear la imagen para evitar interacción durante la anotación
          viewer.setInteraction(false); // Deshabilitar interacción
        } else {
          // Permitir la interacción de nuevo cuando se desactiva el modo de anotación
          viewer.setInteraction(true); // Habilitar interacción
        }
      }
      return newState;
    });
  };

  // Mostrar las anotaciones en la consola para verificar
  useEffect(() => {
    console.log("Anotaciones actuales:", annotations);
  }, [annotations]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">OpenSeadragon con Annotorious</h1>
      <div>
        <button
          onClick={toggleAnnotationMode}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {annotationMode ? "Deshabilitar modo de anotación" : "Habilitar modo de anotación"}
        </button>
      </div>
      <div
        id="openseadragon"
        className="w-full h-[600px] mt-4"
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}
