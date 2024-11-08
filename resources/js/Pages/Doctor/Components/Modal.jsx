<<<<<<< HEAD
// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="w-full fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded shadow-lg p-6 max-w-screen-xl w-full max-h-screen overflow-y-auto relative">
                <div
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                    &times;
                </div>
                {children} {/* Contenido del modal */}
=======
import React, { useEffect } from 'react';

const Modal = ({ children, show, onClose }) => {
    useEffect(() => {
        // Cerrar el modal cuando se presiona la tecla "Esc"
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-2xl">
                {/* Botón de cerrar */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                {/* Contenido del modal */}
                <div>{children}</div>
>>>>>>> 3a0280be5883b9d948e040f37229b6a964c8f3ae
            </div>
        </div>
    );
};

export default Modal;
