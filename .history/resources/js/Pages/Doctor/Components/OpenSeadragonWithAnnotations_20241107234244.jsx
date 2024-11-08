import React, { useEffect, useRef, useState } from 'react';

const OpenSeadragonWithAnnotations = ({ imageUrl }) => {
    const viewerRef = useRef(null);
    const [viewer, setViewer] = useState(null);
    const [anno, setAnno] = useState(null);
    const [annotationMode, setAnnotationMode] = useState(false);

    useEffect(() => {
        if (!viewerRef.current) return; // Asegúrate de que el elemento esté disponible

        const viewerInstance = window.OpenSeadragon({
            id: viewerRef.current.id,
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
            document.getElementById('status').textContent = 'Imagen cargada. Puedes comenzar a hacer anotaciones.';
            document.getElementById('toggleAnnotations').disabled = false;
            document.getElementById('clearAnnotations').disabled = false;
        });

        viewerInstance.addHandler('open-failed', () => {
            document.getElementById('status').textContent = 'Error al cargar la imagen. Por favor, verifica la URL.';
        });

        setViewer(viewerInstance);
        setAnno(annoInstance);

        return () => {
            viewerInstance.destroy();
        };
    }, [imageUrl]);

    const toggleAnnotations = () => {
        if (anno) {
            const newMode = !annotationMode;
            anno.setDrawingEnabled(newMode);
            setAnnotationMode(newMode);

            const toggleButton = document.getElementById('toggleAnnotations');
            toggleButton.textContent = newMode ? 'Desactivar Modo Anotación' : 'Activar Modo Anotación';
            toggleButton.style.background = newMode ? '#ff4444' : '#4CAF50';

            if (viewer) {
                viewer.setMouseNavEnabled(!newMode);
                viewer.innerTracker.setTracking(!newMode);
            }
        }
    };

    const clearAnnotations = () => {
        if (confirm('¿Estás seguro de que quieres borrar todas las anotaciones?')) {
            if (anno) {
                const annotations = anno.getAnnotations();
                annotations.forEach(annotation => anno.removeAnnotation(annotation));
                updateAnnotationList();
            }
        }
    };

    const updateAnnotationList = () => {
        if (anno) {
            const annotations = anno.getAnnotations();
            const container = document.getElementById('annotations');
            container.innerHTML = '';

            annotations.forEach((annotation, index) => {
                const div = document.createElement('div');
                div.className = 'annotation-item';
                div.innerHTML = `
                    <strong>Anotación ${index + 1}</strong>
                    <p>${annotation.body && annotation.body.length > 0 ? annotation.body[0].value : 'Sin texto'}</p>
                    <button onclick="deleteAnnotation('${annotation.id}')">Eliminar</button>
                `;
                container.appendChild(div);
            });
        }
    };

    const deleteAnnotation = (id) => {
        if (anno) {
            anno.removeAnnotation(id);
            updateAnnotationList();
        }
    };

    return (
        <div>
            <div id="toolbar">
                <button id="toggleAnnotations" onClick={toggleAnnotations} disabled>Activar/Desactivar Modo Anotación</button>
                <button id="clearAnnotations" onClick={clearAnnotations} disabled>Borrar Todas las Anotaciones</button>
            </div>

            <div id="status">Cargando imagen...</div>

            <div ref={viewerRef} style={{ width: '800px', height: '600px', margin: '20px auto', border: '1px solid #ccc' }}></div>

            <div id="annotationList">
                <h3>Anotaciones:</h3>
                <div id="annotations"></div>
            </div>
        </div>
    );
};

export default OpenSeadragonWithAnnotations;