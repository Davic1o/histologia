import React, { useState } from 'react';
import { EyeIcon, PencilIcon } from 'lucide-react';
import UpdateSampleForm from './UpdateSampleForm';
<<<<<<< HEAD
import Modal from '@/Pages/Doctor/Components/Modal'
import OpenSeadragonViewer from './OpenSeadragonViewer';
=======
import Modal from '@/Components/Modal';
import Visor from '@/Components/Visor';
>>>>>>> 3a0280be5883b9d948e040f37229b6a964c8f3ae

const HistologiaTable = ({ muestras, TypeTissues, user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (id) => {
        setSelectedSampleId(id);  // Guardar el ID de la muestra seleccionada
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isVisor, setVisor] = useState(false);
    const [selectedSample, setSelectedSample] = useState(null);
    const [selectedSampleId, setSelectedSampleId] = useState(null);

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

<<<<<<< HEAD

=======
    const handleView = (id) => {
        setVisor(true);
        console.log('Ver detalles de la muestra:', isVisor);
    };
>>>>>>> 3a0280be5883b9d948e040f37229b6a964c8f3ae

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
                                <div onClick={() => openModal(muestra.id)}>
                                        <EyeIcon className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                                    </div>
                                    {user.permission === 'total' && (
                                        <div onClick={() => handleEdit(muestra)}>
                                            <PencilIcon className="h-5 w-5 text-yellow-600 hover:text-yellow-800" />
                                        </div>
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
<<<<<<< HEAD
             <Modal isOpen={isModalOpen} onClose={closeModal}>
             <OpenSeadragonViewer imagenDzi="312426.dzi" muestraId={selectedSampleId} />
=======

            {/* Modal de Visor */}
            <Modal show={isVisor} onClose={() => setVisor(false)}>
                <Visor />
>>>>>>> 3a0280be5883b9d948e040f37229b6a964c8f3ae
            </Modal>
        </div>
    );
};

export default HistologiaTable;
