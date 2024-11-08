import React, { useState, useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import '@recogito/annotorious-openseadragon/dist/annotorious.min.css';
import '@recogito/annotorious-openseadragon';

// Error Boundary para manejar errores en el visor
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error en OpenSeadragon:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal en la visualización de la imagen</h1>;
    }

    return this.props.children;
  }
}

const OpenSeadragonViewer = ({ imageUrl }) => {
  const viewerRef = useRef(null);
  const [viewer, setViewer] = useState(null);
  const [anno, setAnno] = useState(null);
  const [annotationMode, setAnnotationMode] = useState(false);
  const [annotations, setAnnotations] = useState([]);

  // Inicializar OpenSeadragon y Annotorious
  useEffect(() => {
    if (!imageUrl) {
      console.error('imageUrl no está definido');
      return;
    }

    console.log(viewerRef.current); // Verificar que viewerRef está asignado correctamente

    if (viewerRef.current) {
      const viewerInstance = OpenSeadragon({
        id: viewerRef.current,
        prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/',
        tileSources: imageUrl,
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 2,
      });

      const annoInstance = viewerInstance.Annotorious({
        readOnly: false,
        allowEmpty: false,
      });

      // Configurar eventos de anotaciones
      annoInstance.on('createAnnotation', (annotation) => {
        setAnnotations((prevAnnotations) => [...prevAnnotations, annotation]);
      });
      annoInstance.on('updateAnnotation', (annotation) => {
        setAnnotations((prevAnnotations) =>
          prevAnnotations.map((ann) =>
            ann.id === annotation.id ? annotation : ann
          )
        );
      });
      annoInstance.on('deleteAnnotation', (annotation) => {
        setAnnotations((prevAnnotations) =>
          prevAnnotations.filter((ann) => ann.id !== annotation.id)
        );
      });

      setViewer(viewerInstance);
      setAnno(annoInstance);
    }

    return () => {
      if (viewer) viewer.destroy();
    };
  }, [imageUrl, viewer]);

  // Toggle de modo de anotación
  const toggleAnnotationMode = () => {
    if (anno) {
      setAnnotationMode((prevState) => !prevState);
      anno.setDrawingEnabled(!annotationMode);
    }
  };

  // Limpiar todas las anotaciones
  const clearAnnotations = () => {
    if (anno && window.confirm('¿Estás seguro de borrar todas las anotaciones?')) {
      annotations.forEach((annotation) => anno.removeAnnotation(annotation));
      setAnnotations([]);
    }
  };

  // Eliminar una anotación específica
  const deleteAnnotation = (id) => {
    if (anno) {
      anno.removeAnnotation(id);
      setAnnotations((prevAnnotations) =>
        prevAnnotations.filter((annotation) => annotation.id !== id)
      );
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleAnnotationMode}>
          {annotationMode ? 'Desactivar Modo Anotación' : 'Activar Modo Anotación'}
        </button>
        <button onClick={clearAnnotations}>Borrar Todas las Anotaciones</button>
      </div>
      <div ref={viewerRef} style={{ width: '800px', height: '600px', margin: '20px auto', border: '1px solid #ccc' }}></div>
      <div style={{ marginTop: '20px' }}>
        <h3>Anotaciones:</h3>
        <div>
          {annotations.map((annotation, index) => (
            <div key={annotation.id} style={{ margin: '10px 0', padding: '10px', background: '#f9f9f9', borderLeft: '3px solid #4CAF50' }}>
              <strong>Anotación {index + 1}</strong>
              <p>{annotation.body?.length > 0 ? annotation.body[0].value : 'Sin texto'}</p>
              <button onClick={() => deleteAnnotation(annotation.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Envolver el componente en el ErrorBoundary
const OpenSeadragonViewerWithErrorBoundary = ({ imageUrl }) => (
  <ErrorBoundary>
    <OpenSeadragonViewer imageUrl={imageUrl} />
  </ErrorBoundary>
);

export default OpenSeadragonViewerWithErrorBoundary;
