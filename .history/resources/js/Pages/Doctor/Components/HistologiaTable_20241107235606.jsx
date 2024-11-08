import React, { useState } from 'react';
import { EyeIcon, PencilIcon, XIcon } from 'lucide-react';
import UpdateSampleForm from './UpdateSampleForm';
import OpenSeadragonViewer from './OpenSeadragonViewer';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div 
                className="fixed inset-0 bg-black bg-opacity-50" 
                onClick={onClose}
            />
            
            {/* Modal content */}
            <div className="relative bg-white rounded-lg w-11/12 max-w-7xl max-h-[90vh] z-50">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <XIcon className="h-5 w-5 text-gray-500" />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-4 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

const HistologiaTable = ({ muestras, TypeTissues, user }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [selectedSample, setSelectedSample] = useState(null);

    const formatDate = (date) => {
        const d = new Date(date);
        const pad = (num) => num.toString().padStart(2, '0');
        
        const day = pad(d.getDate());
        const month = pad(d.getMonth() + 1);
        const year = d.getFullYear();
        const hours = pad(d.getHours());
        const minutes = pad(d.getMinutes());
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    const handleView = (muestra) => {
        setSelectedSample(muestra);
        setIsViewerOpen(true);
    };

    const handleEdit = (sample) => {
        setSelectedSample(sample);
        setIsEditing(true);
    };

    const closeForm = () => {
        setIsEditing(false);
        setSelectedSample(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Código</th>
                        <th className="p-3 text-left">Paciente</th>
                        <th className="p-3 text-left">Cédula</th>
                        <th className="p-3 text-left">Tejido</th>
                        <th className="p-3 text-left">Descripción</th>
                        <th className="p-3 text-left">Última Modificación</th>
                        <th className="p-3 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {muestras.length > 0 ? (
                        muestras.map(muestra => (
                            <tr key={muestra.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{muestra.code}</td>
                                <td className="p-3">{muestra.paciente.name}</td>
                                <td className="p-3">{muestra.paciente.ci}</td>
                                <td className="p-3">{muestra.type_tissue.codigo}</td>
                                <td className="p-3">{muestra.description}</td>
                                <td className="p-3">{formatDate(muestra.updated_at)}</td>
                                <td className="p-3 flex gap-2">
                                    <button 
                                        onClick={() => handleView(muestra)}
                                        className="p-1 hover:bg-blue-100 rounded-full transition-colors"
                                    >
                                        <EyeIcon className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                                    </button>
                                    {user.permission === 'total' && (
                                        <button 
                                            onClick={() => handleEdit(muestra)}
                                            className="p-1 hover:bg-yellow-100 rounded-full transition-colors"
                                        >
                                            <PencilIcon className="h-5 w-5 text-yellow-600 hover:text-yellow-800" />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="p-3 text-center text-gray-500">
                                Aún no hay muestras
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isEditing && (
                <UpdateSampleForm
                    sample={selectedSample}
                    onClose={closeForm}
                    TypeTissues={TypeTissues}
                />
            )}
           {isEditing && (  
            <Modal 
                isOpen={isViewerOpen} 
                onClose={() => setIsViewerOpen(false)}
                title={`Visor de Muestra - ${selectedSample?.code}`}
            >
                <OpenSeadragonViewer />
            </Modal>
           )}
        </div>
    );
};

export default HistologiaTable;