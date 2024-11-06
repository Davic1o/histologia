import React, { useState, useEffect } from 'react';
import { PlusIcon } from 'lucide-react';
import HistologiaTable from './HistologiaTable';
import CreateSampleForm from './CreateSampleForm';

const HistologiaDoctor = () => {
    const [tissues, setTissues] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const mockData = [
            {
                id: 1,
                code: 'MUE001',
                patientName: 'Juan García',
                patientId: '1234567890',
                tissueId: 'TEJ001',
                description: 'Muestra de tejido epitelial',
                lastModified: new Date(),
                modifiedBy: 'Dr. Juan Pérez',
            },
            {
                id: 2,
                code: 'MUE002',
                patientName: 'María López',
                patientId: '0987654321',
                tissueId: 'TEJ002',
                description: 'Muestra de tejido conectivo',
                lastModified: new Date(),
                modifiedBy: 'Dra. María García',
            },
        ];
        setTissues(mockData);
    }, []);

    const handleCreateSample = (newSample) => {
        setTissues(prev => [...prev, { ...newSample, id: prev.length + 1, lastModified: new Date() }]);
        setIsDialogOpen(false);
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex gap-2">
                    {isDialogOpen && (
                        <CreateSampleForm onClose={() => setIsDialogOpen(false)} onCreate={handleCreateSample} />
                    )}
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 flex items-center"
                    >
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Nueva Muestra
                    </button>
                </div>
            </div>

            <HistologiaTable tissues={tissues} />
        </div>
    );
};

export default HistologiaDoctor;
