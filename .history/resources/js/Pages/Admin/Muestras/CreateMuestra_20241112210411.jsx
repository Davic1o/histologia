import React from 'react';
import { useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayoutA';

export default function CreateMuestra({ auth, pacientes, typeTissues }) {
    const { data, setData, post, errors, progress } = useForm({
        code: '',
        paciente_id: 1,
        type_tissue_id: '',
        description: '',
        archivo_zip: null, // Para el archivo ZIP
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/muestras', {
            forceFormData: true, // Para asegurar que el archivo se envíe como FormData
        });
    };

    return (
        <Authenticated user={auth.user}>
            <div className="max-w-xl mx-auto mt-6 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-700 mb-4">Crear Muestra</h2>
                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                    {/* Código */}
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

                    {/* Tipo de Tejido */}
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

                    {/* Descripción */}
                    <div>
                        <label className="block text-gray-700">Descripción</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                    </div>

                    {/* Subida de Archivo ZIP */}
                    <div>
                        <label className="block text-gray-700">Archivo ZIP</label>
                        <input
                            type="file"
                            accept=".zip"
                            onChange={(e) => setData('archivo_zip', e.target.files[0])}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.archivo_zip && <div className="text-red-500 text-sm">{errors.archivo_zip}</div>}
                    </div>

                    {/* Barra de progreso */}
                    {progress && (
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                            <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    )}

                    {/* Botón de Enviar */}
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Crear
                    </button>
                </form>
            </div>
        </Authenticated>
    );
}
