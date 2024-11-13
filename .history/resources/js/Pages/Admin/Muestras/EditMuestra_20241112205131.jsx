import React from 'react';
import { useForm } from '@inertiajs/react';

export default function EditMuestra({ muestra, pacientes, typeTissues }) {
    const { data, setData, put, errors } = useForm({
        code: muestra.code || '',
        paciente_id: muestra.paciente_id || '',
        type_tissue_id: muestra.type_tissue_id || '',
        description: muestra.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/muestras/${muestra.id}`);
    };

    return (
        <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Editar Muestra</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Código</label>
                    <input
                        type="text"
                        value={data.code}
                        onChange={(e) => setData('code', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.code && <div className="text-red-500 text-sm">{errors.code}</div>}
                </div>
                <div>
                    <label className="block text-gray-700">Paciente</label>
                    <select
                        value={data.paciente_id}
                        onChange={(e) => setData('paciente_id', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Seleccione un paciente</option>
                        {pacientes.map((paciente) => (
                            <option key={paciente.id} value={paciente.id}>
                                {paciente.name}
                            </option>
                        ))}
                    </select>
                    {errors.paciente_id && <div className="text-red-500 text-sm">{errors.paciente_id}</div>}
                </div>
                <div>
                    <label className="block text-gray-700">Tipo de Tejido</label>
                    <select
                        value={data.type_tissue_id}
                        onChange={(e) => setData('type_tissue_id', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Seleccione un tipo de tejido</option>
                        {typeTissues.map((typeTissue) => (
                            <option key={typeTissue.id} value={typeTissue.id}>
                                {typeTissue.name}
                            </option>
                        ))}
                    </select>
                    {errors.type_tissue_id && <div cla
