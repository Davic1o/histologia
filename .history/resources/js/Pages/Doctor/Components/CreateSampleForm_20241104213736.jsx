import React, { useState } from 'react';

const CreateSampleForm = ({ onClose, onCreate }) => {
    const [newSample, setNewSample] = useState({
        patientName: '',
        patientId: '',
        code: '',
        tissueId: '',
        description: '',
        image: null
    });

    const tissueTypes = [
        { id: 'TEJ001', name: 'Tejido Epitelial' },
        { id: 'TEJ002', name: 'Tejido Conectivo' },
        { id: 'TEJ003', name: 'Tejido Muscular' },
        { id: 'TEJ004', name: 'Tejido Nervioso' },
    ];

    const handleNewSampleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'image') {
            setNewSample(prev => ({ ...prev, image: files[0] }));
        } else {
            setNewSample(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleCreateSample = () => {
        const formData = new FormData();
        formData.append('patientName', newSample.patientName);
        formData.append('patientId', newSample.patientId);
        formData.append('code', newSample.code);
        formData.append('tissueId', newSample.tissueId);
        formData.append('description', newSample.description);
        if (newSample.image) {
            formData.append('image', newSample.image);
        }

        onCreate(newSample);
        setNewSample({
            patientName: '',
            patientId: '',
            code: '',
            tissueId: '',
            description: '',
            image: null
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Crear Nueva Muestra</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="patientName">Nombre Completo</label>
                        <input
                            id="patientName"
                            value={newSample.patientName}
                            onChange={handleNewSampleChange}
                            placeholder="Nombre del paciente"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="patientId">Número de Cédula</label>
                        <input
                            id="patientId"
                            value={newSample.patientId}
                            onChange={handleNewSampleChange}
                            placeholder="Ej: 1234567890"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="code">Código de Muestra</label>
                        <input
                            id="code"
                            value={newSample.code}
                            onChange={handleNewSampleChange}
                            placeholder="Ej: MUE001"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="tissueId">Tipo de Tejido</label>
                        <select
                            id="tissueId"
                            className="w-full border border-gray-300 rounded p-2"
                            value={newSample.tissueId}
                            onChange={handleNewSampleChange}
                        >
                            <option value="">Seleccione un tejido</option>
                            {tissueTypes.map(tissue => (
                                <option key={tissue.id} value={tissue.id}>{tissue.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="description">Descripción</label>
                        <textarea
                            id="description"
                            value={newSample.description}
                            onChange={handleNewSampleChange}
                            placeholder="Descripción de la muestra"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="image">Imagen (Opcional)</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleNewSampleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleCreateSample}
                            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                        >
                            Crear Muestra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSampleForm;
