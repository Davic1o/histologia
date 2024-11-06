import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const UpdateSampleForm = ({ onClose, TypeTissues, sample }) => {
    const { data, setData, put, errors } = useForm({
        nombre: sample.paciente?.name || '',
        cedula: sample.paciente?.ci || '',
        CodigoMuestra: sample.code || '',
        tissues_id: sample.type_tissue_id ? sample.type_tissue_id.toString() : '', // Asegúrate de convertir a cadena
        descripcion: sample.description || '',
        image: null,
    });

    useEffect(() => {
        if (sample) {
            setData({
                nombre: sample.paciente?.name || '',
                cedula: sample.paciente?.ci || '',
                CodigoMuestra: sample.code || '',
                tissues_id: sample.type_tissue_id ? sample.type_tissue_id.toString() : '', // Asegúrate de convertir a cadena
                descripcion: sample.description || '',
                image: null,
            });
        }
    }, [sample]);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setData(id, files ? files[0] : value.toString()); // Asegúrate de que el valor sea una cadena
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('doctor.update', sample.id), {
            data: data,
            onSuccess: () => onClose(),
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Actualizar Muestra</h2>
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
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="CodigoMuestra">Código de Muestra</label>
                        <input
                            id="CodigoMuestra"
                            value={data.CodigoMuestra}
                            onChange={handleChange}
                            readOnly
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.CodigoMuestra && <span className="text-red-500 text-sm">{errors.CodigoMuestra}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="tissues_id">Tipo de Tejido</label>
                        <select
                            id="tissues_id"
                            value={data.tissues_id}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        >
                            <option value="">Seleccione un tejido</option>
                            {TypeTissues.map((tissue) => (
                                <option key={tissue.id} value={tissue.id.toString()}>{tissue.name}</option> // Asegúrate de convertir a cadena
                            ))}
                        </select>
                        {errors.tissues_id && <span className="text-red-500 text-sm">{errors.tissues_id}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="descripcion">Descripción</label>
                        <textarea
                            id="descripcion"
                            value={data.descripcion}
                            onChange={handleChange}
                            placeholder="Descripción de la muestra"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.descripcion && <span className="text-red-500 text-sm">{errors.descripcion}</span>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="image">Imagen (Opcional)</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
                    </div>
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
                            Actualizar Muestra
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSampleForm;
