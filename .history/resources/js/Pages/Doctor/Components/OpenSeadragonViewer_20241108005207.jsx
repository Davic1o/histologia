import React, { useEffect, useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadStyle = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
};

const OpenSeadragonViewer = ({tileSources}) => {
  const { data, setData, post } = useForm({
    comentario: '',
    etiquetas: '',
    anotacionId: '',
    anotacionTarget: {},
  });

  const viewerRef = useRef(null);
  const [status, setStatus] = useState('Cargando imagen...');
  const [annotationMode, setAnnotationMode] = useState(false);
  const [viewer, setViewer] = useState(null);
  const [anno, setAnno] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    loadStyle('https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/annotorious.min.css');

    const loadDependencies = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/openseadragon.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/@recogito/annotorious-openseadragon@2.7.14/dist/openseadragon-annotorious.min.js');
        initializeViewer();
      } catch (error) {
        setStatus('Error al cargar las dependencias');
      }
    };

    loadDependencies();

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  const initializeViewer = () => {
    const newViewer = OpenSeadragon({
      id: viewerRef.current?.id,
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
      tileSources: '/storage/images/312426.dzi',
      animationTime: 0.5,
      blendTime: 0.1,
      constrainDuringPan: true,
      maxZoomPixelRatio: 2,
      minZoomLevel: 1,
      visibilityRatio: 1,
      zoomPerScroll: 2
    });

    newViewer.addHandler('open', () => {
      initializeAnnotorious(newViewer);
      setStatus('Imagen cargada. Puedes comenzar a hacer anotaciones.');
    });

    newViewer.addHandler('open-failed', () => {
      setStatus('Error al cargar la imagen. Por favor, verifica la URL.');
    });

    setViewer(newViewer);
  };

  const initializeAnnotorious = (viewer) => {
    const newAnno = OpenSeadragon.Annotorious(viewer, {
      readOnly: false,
      allowEmpty: false
    });

    newAnno.on('createAnnotation', (annotation) => {
      console.log("Se ha creado una anotación:", annotation);
      const { body, id, target } = annotation;

      setData({
        comentario: body.find(b => b.purpose === 'commenting')?.value || '',
        etiquetas: body.find(b => b.purpose === 'tagging')?.value || '',
        anotacionId: id,
        anotacionTarget: target,
      });

      updateAnnotationList();
    });

    newAnno.on('updateAnnotation', updateAnnotationList);
    newAnno.on('deleteAnnotation', updateAnnotationList);
    newAnno.setDrawingEnabled(false);

    setAnno(newAnno);
  };

  const updateAnnotationList = () => {
    if (anno) {
      const currentAnnotations = anno.getAnnotations();
      console.log("Anotaciones actuales en updateAnnotationList:", currentAnnotations);
      setAnnotations(currentAnnotations);
    }
  };

  const toggleAnnotationMode = () => {
    if (anno && viewer) {
      const newMode = !annotationMode;
      setAnnotationMode(newMode);
      anno.setDrawingEnabled(newMode);
      viewer.setMouseNavEnabled(!newMode);
      viewer.innerTracker.setTracking(!newMode);
    }
  };

  const clearAnnotations = () => {
    if (anno && window.confirm('¿Estás seguro de que quieres borrar todas las anotaciones?')) {
      const currentAnnotations = anno.getAnnotations();
      currentAnnotations.forEach(annotation => {
        anno.removeAnnotation(annotation);
      });
      setAnnotations([]);
      console.log("Todas las anotaciones fueron eliminadas");
    }
  };

  const deleteAnnotation = (id) => {
    if (anno) {
      anno.removeAnnotation(id);
      updateAnnotationList();
      console.log(`Anotación con ID ${id} eliminada`);
    }
  };

  // Función para enviar los datos del formulario al backend
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data)
   /*post('/ruta-del-backend', {
      onSuccess: () => {
        console.log("Formulario enviado con éxito.");
        setData({
          comentario: '',
          etiquetas: '',
          anotacionId: '',
          anotacionTarget: {},
        });
      },
    });*/
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="mb-4">
        <div className="p-4 bg-gray-100 rounded-t-lg">
          <button
            onClick={toggleAnnotationMode}
            className={`px-4 py-2 rounded mr-2 text-white ${annotationMode ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
            disabled={!anno}
          >
            {annotationMode ? 'Desactivar' : 'Activar'} Modo Anotación
          </button>
          <button
            onClick={clearAnnotations}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
            disabled={!anno}
          >
            Borrar Todas las Anotaciones
          </button>
        </div>
      </div>

      <div className="text-center text-gray-600 my-4">{status}</div>

      <div
        id="openseadragon-viewer"
        ref={viewerRef}
        className="w-full h-[400px] border border-gray-300 rounded-lg mb-4"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Anotaciones:</h3>
        {annotations.map((annotation, index) => (
          <div key={annotation.id} className="p-4 mb-2 bg-gray-50 border-l-4 border-green-500 rounded">
            <strong>Anotación {index + 1}</strong>
            <p>{annotation.body?.[0]?.value || 'Sin texto'}</p>
            <button
              onClick={() => deleteAnnotation(annotation.id)}
              className="mt-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
            >
              Eliminar
            </button>
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Comentario:</label>
            <input
              type="text"
              value={data.comentario}
              onChange={(e) => setData('comentario', e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label>Etiquetas:</label>
            <input
              type="text"
              value={data.etiquetas}
              onChange={(e) => setData('etiquetas', e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Enviar Anotación
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpenSeadragonViewer;
