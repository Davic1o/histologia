// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // No renderiza nada si el modal no está abierto

    return (
        <div className="w-full fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded shadow-lg p-6 max-w-10xl relative">
                <div
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    &times;
                </div>
                {children} {/* Contenido del modal */}
            </div>
        </div>
    );
};

export default Modal;
