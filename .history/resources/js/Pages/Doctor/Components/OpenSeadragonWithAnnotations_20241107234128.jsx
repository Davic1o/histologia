import React, { useEffect, useRef, useState } from 'react';

const OpenSeadragonWithAnnotations = ({ imageUrl }) => {
    const viewerRef = useRef(null);
    const annotationsContainerRef = useRef(null);
    const toggleAnnotationsRef = useRef(null);
    const clearAnnotationsRef = useRef(null);
    const statusRef = useRef(null);
    const [viewer, setViewer] = useState(null);
    const [anno, setAnno] = useState(null);
    const [annotationMode, setAnnotationMode] = useState(false);

    useEffect(() => {
        if (!viewerRef.current) return; // Evitar inicialización sin el contenedor disponible

        const viewerInstance = window.OpenSeadragon({
            element: viewerRef.current,
            prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.2/images/",
            tileSources: imageUrl,
            animationTime: 0.5,
            blendTime: 0.1,
            constrainDuringPan: true,
            maxZoomPixelRatio: 2,
            minZoomLevel: 1,
            visibilityRatio: 1,
            zoomPerScroll: 2
        });

        const annoInstance = window.Annotorious(viewerInstance, { readOnly: false, allowEmpty: false });
        
        annoInstance.on('createAnnotation', updateAnnotationList);
        annoInstance.on('updateAnnotation', updateAnnotationList);
        annoInstance.on('deleteAnnotation', updateAnnotationList);

        viewerInstance.addHandler('open', () => {
            if (statusRef.current) statusRef.current.textContent = 'Imagen cargada. Puedes comenzar a hacer anotaciones.';
            if (toggleAnnotationsRef.current) toggleAnnotationsRef.current.disabled = false;
            if (clearAnnotationsRef.current) clearAnnotationsRef.current.disabled = false;
        });

        viewerInstance.addHandler('open-failed', () => {
            if (statusRef.current) statusRef.current.textContent = 'Error al cargar la imagen. Por favor, verifica la URL.';
        });

        setViewer(viewerInstance);
        setAnno(annoInstance);

        return () => {
            viewerInstance.destroy();
            setViewer(null);
            setAnno(null);
        };
    }, [imageUrl]);

    const toggleAnnotations = () => {
        if (anno) {
            const newMode = !annotationMode;
            anno.setDrawingEnabled(newMode);
            setAnnotationMode(newMode);

            if (toggleAnnotationsRef.current) {
                toggleAnnotationsRef.current.textContent = newMode ? 'Desactivar Modo Anotación' : 'Activar Modo Anotación';
                toggleAnnotationsRef.current.style.background = newMode ? '#ff4444' : '#4CAF50';
            }

            if (viewer) {
                viewer.setMouseNavEnabled(!newMode);
                viewer.innerTracker.setTracking(!newMode);
            }
        }
    };

    const clearAnnotations = () => {
        if (confirm('¿Estás seguro de que quieres borrar todas las anotaciones?') && anno) {
            const annotations = anno.getAnnotations();
            annotations.forEach(annotation => anno.removeAnnotation(annotation));
            updateAnnotationList();
        }
    };

    const updateAnnotationList = () => {
        if (anno && annotationsContainerRef.current) {
            const annotations = anno.getAnnotations();
            annotationsContainerRef.current.innerHTML = ''; // Limpiar contenedor

            annotations.forEach((annotation, index) => {
                const div = document.createElement('div');
                div.className = 'annotation-item';
                div.innerHTML = `
                    <strong>Anotación ${index + 1}</strong>
                    <p>${annotation.body && annotation.body.length > 0 ? annotation.body[0].value : 'Sin texto'}</p>
                    <button onclick="document.querySelector('#annotations').dispatchEvent(new CustomEvent('deleteAnnotation', { detail: '${annotation.id}' }))">Eliminar</button>
                `;
                annotationsContainerRef.current.appendChild(div);
            });
        }
    };

    useEffect(() => {
        // Añadir el listener de eventos para eliminar anotaciones
        const handleDeleteAnnotation = (e) => {
            const annotationId = e.detail;
            if (anno) anno.removeAnnotation(annotationId);
            updateAnnotationList();
        };
        
        annotationsContainerRef.current?.addEventListener('deleteAnnotation', handleDeleteAnnotation);

        return () => {
            annotationsContainerRef.current?.removeEventListener('deleteAnnotation', handleDeleteAnnotation);
        };
    }, [anno]);

    return (
        <div>
            <div id="toolbar">
                <button ref={toggleAnnotationsRef} onClick={toggleAnnotations} disabled>Activar/Desactivar Modo Anotación</button>
                <button ref={clearAnnotationsRef} onClick={clearAnnotations} disabled>Borrar Todas las Anotaciones</button>
            </div>

            <div ref={statusRef}>Cargando imagen...</div>

            <div ref={viewerRef} style={{ width: '800px', height: '600px', margin: '20px auto', border: '1px solid #ccc' }}></div>

            <div id="annotationList">
                <h3>Anotaciones:</h3>
                <div ref={annotationsContainerRef}></div>
            </div>
        </div>
    );
};

export default OpenSeadragonWithAnnotations;
