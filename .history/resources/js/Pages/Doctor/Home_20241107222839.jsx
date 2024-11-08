import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [viewer, setViewer] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [polygon, setPolygon] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [annotationText, setAnnotationText] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inicialización de OpenSeadragon
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
      setViewer(viewerInstance);
    });

    return () => {
      if (viewerInstance) {
        viewerInstance.destroy();
      }
    };
  }, []);

  // Iniciar dibujo del polígono
  const startDrawing = () => {
    setDrawing(true);
    setPolygon([]);
  };

  // Detener dibujo y guardar anotación
  const stopDrawing = () => {
    setDrawing(false);
    if (polygon.length > 2) {
      const newAnnotation = {
        id: Date.now(), // ID único para la anotación
        polygon,
        text: annotationText,
      };
      setAnnotations((prev) => [...prev, newAnnotation]);
      setAnnotationText(""); // Limpiar texto de la anotación
    }
  };

  // Actualizar coordenadas del polígono
  const handleMouseDown = (event) => {
    if (!drawing || !viewer) return;

    const position = viewer.viewport.pointFromPixel(
      new OpenSeadragon.Point(event.clientX, event.clientY)
    );

    setPolygon((prev) => [...prev, position]);
  };

  const handleMouseUp = (event) => {
    if (!drawing) return;
    // No hacemos nada especial en el mouseUp, solo necesitamos el mouseDown para captar los puntos
  };

  const handleMouseMove = (event) => {
    if (!drawing || !viewer) return;

    // Actualizar visualización del polígono mientras se dibuja
    if (polygon.length > 0) {
      const position = viewer.viewport.pointFromPixel(
        new OpenSeadragon.Point(event.clientX, event.clientY)
      );

      // Aquí puedes dibujar el polígono en un canvas para mostrarlo visualmente
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(polygon[0].x, polygon[0].y);
        polygon.forEach((point) => {
          ctx.lineTo(point.x, point.y);
        });
        ctx.lineTo(position.x, position.y); // Continuar hasta la posición actual
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  };

  // Convertir las coordenadas del polígono a texto
  const handleAnnotationTextChange = (event) => {
    setAnnotationText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Dibuja un Polígono en la Imagen</h1>

      {/* Mostrar botones para iniciar/detener dibujo */}
      <div>
        <button
          onClick={startDrawing}
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        >
          Comenzar a dibujar
        </button>
        <button
          onClick={stopDrawing}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Detener dibujo
        </button>
      </div>

      {/* Campo para texto de la anotación */}
      <div className="mt-4">
        <input
          type="text"
          value={annotationText}
          onChange={handleAnnotationTextChange}
          placeholder="Escribe tu anotación aquí..."
          className="p-2 border rounded"
        />
      </div>

      {/* Canvas para visualizar el dibujo del polígono */}
      <div className="mt-4 relative">
        <div
          id="openseadragon"
          className="w-full h-[600px]"
          style={{ border: "1px solid black" }}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0"
          style={{ width: "100%", height: "600px", pointerEvents: "none" }}
        ></canvas>
      </div>

      {/* Mostrar las anotaciones */}
      <div className="mt-4">
        <h2>Anotaciones:</h2>
        <ul>
          {annotations.map((annotation) => (
            <li key={annotation.id}>
              <strong>Anotación {annotation.id}</strong>
              <p>{annotation.text}</p>
              <p>
                Coordenadas del polígono:{" "}
                {annotation.polygon.map((point, index) => (
                  <span key={index}>
                    ({point.x.toFixed(2)}, {point.y.toFixed(2)})
                    {index < annotation.polygon.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
