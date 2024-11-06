import React from 'react';
import { EyeIcon, PencilIcon } from 'lucide-react';

const HistologiaTable = ({ muestras }) => {
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

    const handleView = (id) => {
        console.log('Ver detalles de la muestra:', id);
    };

    const handleEdit = (id) => {
        console.log('Editar muestra:', id);
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
                        muestras.map(tissue => (
                            <tr key={tissue.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{tissue.code}</td>
                                <td className="p-3">{tissue.paciente.name}</td>
                                <td className="p-3">{tissue.paciente.ci}</td>
                                <td className="p-3">{tissue.type}</td>
                                <td className="p-3">{tissue.description}</td>
                                <td className="p-3">{formatDate(tissue.lastModified)}</td>
                                <td className="p-3 flex gap-2">
                                    <button onClick={() => handleView(tissue.id)}>
                                        <EyeIcon className="h-5 w-5 text-blue-600 hover:text-blue-800" />
                                    </button>
                                    <button onClick={() => handleEdit(tissue.id)}>
                                        <PencilIcon className="h-5 w-5 text-yellow-600 hover:text-yellow-800" />
                                    </button>
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
        </div>
    );
};

export default HistologiaTable;