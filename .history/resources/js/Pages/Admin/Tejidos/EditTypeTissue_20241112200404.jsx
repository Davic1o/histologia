import React from 'react';
import { useForm } from '@inertiajs/react';

export default function EditTypeTissue({ typeTissue }) {
    const { data, setData, put, errors } = useForm({
        name: typeTissue.name || '',
        codigo: typeTissue.codigo || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/type-tissues/${typeTissue.id}`);
    };

    return (
        <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Editar Tipo de Tejido</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                </div>
                <div>
                    <label className="block text-gray-700">Código</label>
                    <input
                        type="text"
                        value={data.codigo}
                        onChange={(e) => setData('codigo', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.codigo && <div className="text-red-500 text-sm">{errors.codigo}</div>}
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Actualizar
                </button>
            </form>
        </div>
    );
}
