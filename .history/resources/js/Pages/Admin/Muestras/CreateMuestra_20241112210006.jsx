import React from 'react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayoutA';

export default function CreateMuestra({auth, pacientes, typeTissues }) {
    const { data, setData, post, errors } = useForm({
        code: '',
        paciente_id: 1,
        type_tissue_id: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/muestras');
    };

    return (        <Authenticated user={auth.user} >


        <div className="max-w-xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Crear Muestra</h2>
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
                    {errors.type_tissue_id && <div className="text-red-500 text-sm">{errors.type_tissue_id}</div>}
                </div>
                <div>
                    <label className="block text-gray-700">Descripción</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        />
                    {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                </div>
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                    Crear
                </button>
            </form>
        </div>
                        </Authenticated>
    );
}
