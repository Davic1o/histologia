import React, { useEffect, useState } from 'react';

const OpenSeadragonViewer = () => {
    const [viewer, setViewer] = useState(null);
    const [anno, setAnno] = useState(null);
    const [annotationMode, setAnnotationMode] = useState(false);
    const [annotations, setAnnotations] = useState([]);
    
    useEffect(() => {
        // Inicializar OpenSeadragon
        const viewerInstance = OpenSeadragon({
            id: "openseadragon",
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

        viewerInstance.addHandler('open', () => {
            // Inicializar Annotorious después de que OpenSeadragon haya cargado
            const annotoriousInstance = OpenSeadragon.Annotorious(viewerInstance, {
                readOnly: false,
                allowEmpty: false
            });

            // Verifica si Annotorious se ha inicializado correctamente
            console.log('Annotorious Instance:', annotoriousInstance);

            annotoriousInstance.on('createAnnotation', (annotation) => {
                console.log('Anotación creada:', annotation);
                setAnnotations(prev => [...prev, annotation]);
            });

            annotoriousInstance.on('updateAnnotation', (annotation) => {
                console.log('Anotación actualizada:', annotation);
                setAnnotations(prev => prev.map(a => a.id === annotation.id ? annotation : a));
            });

            annotoriousInstance.on('deleteAnnotation', (annotation) => {
                console.log('Anotación eliminada:', annotation);
                setAnnotations(prev => prev.filter(a => a.id !== annotation.id));
            });

            setViewer(viewerInstance);
            setAnno(annotoriousInstance);
        });

        viewerInstance.addHandler('open-failed', () => {
            console.log('Error al cargar la imagen.');
        });

        return () => {
            viewerInstance.destroy();
        };
    }, []);
    
    const toggleAnnotationMode = () => {
        setAnnotationMode(!annotationMode);
        if (anno) {
            // Asegúrate de que Annotorious esté habilitado para dibujar
            anno.setDrawingEnabled(!annotationMode);
            console.log('Modo de anotación:', !annotationMode);
        }
    };

    const clearAnnotations = () => {
        if (window.confirm('¿Estás seguro de que quieres borrar todas las anotaciones?')) {
            annotations.forEach(annotation => anno.removeAnnotation(annotation.id));
            setAnnotations([]);
        }
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <button onClick={toggleAnnotationMode}>
                    {annotationMode ? 'Desactivar Modo Anotación' : 'Activar Modo Anotación'}
                </button>
                <button onClick={clearAnnotations}>Borrar Todas las Anotaciones</button>
            </div>

            <div id="openseadragon" style={{ width: '800px', height: '600px', margin: '20px auto', border: '1px solid #ccc' }}></div>

            <div id="annotationList" style={{ width: '800px', margin: '20px auto', padding: '10px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }}>
                <h3>Anotaciones:</h3>
                <div id="annotations">
                    {annotations.map((annotation, index) => (
                        <div key={annotation.id} className="annotation-item" style={{ margin: '10px 0', padding: '10px', background: '#f9f9f9', borderLeft: '3px solid #4CAF50' }}>
                            <strong>Anotación {index + 1}</strong>
                            <p>{annotation.body && annotation.body.length > 0 ? annotation.body[0].value : 'Sin texto'}</p>
                            <button onClick={() => anno.removeAnnotation(annotation.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenSeadragonViewer;
