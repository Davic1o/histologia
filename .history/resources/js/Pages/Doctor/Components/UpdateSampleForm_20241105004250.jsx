import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const CreateSampleForm = ({ onClose, TypeTissues, initialData = {} }) => {
    const { data, setData, post, errors } = useForm({
        nombre: initialData.paciente?.name || '',
        cedula: initialData.paciente?.ci || '',
        CodigoMuestra: initialData.code || '',
        tissues_id: initialData.tissues_id || '',
        descripcion: initialData.description || '',
        image: null,
    });

    useEffect(() => {
        if (initialData) {
            setData({
                nombre: initialData.paciente?.name || '',
                cedula: initialData.paciente?.ci || '',
                CodigoMuestra: initialData.code || '',
                tissues_id: initialData.tissues_id || '',
                descripcion: initialData.description || '',
                image: null,
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setData(id, files ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('doctor.muestra'), {
            onSuccess: () => onClose(),
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">
                    {initialData ? 'Editar Muestra' : 'Crear Nueva Muestra'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="nombre">Nombre Completo</label>
                        <input
                            id="nombre"
                            value={data.nombre}
                            onChange={handleChange}
                            placeholder="Nombre del paciente"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="cedula">Número de Cédula</label>
                        <input
                            id="cedula"
                            value={data.cedula}
                            onChange={handleChange}
                            placeholder="Ej: 1234567890"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.cedula && <span className="text-red-500 text-sm">{errors.cedula}</span>}
                    </div>
                    {/* ...continúa el resto de los campos... */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 rounded px-4 py-2 hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                        >
                            {initialData ? 'Actualizar Muestra' : 'Crear Muestra'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSampleForm;