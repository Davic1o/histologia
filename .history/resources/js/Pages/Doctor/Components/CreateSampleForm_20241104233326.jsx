import React from 'react';
import { useForm } from '@inertiajs/react';

const CreateSampleForm = ({ onClose }) => {
    const { data, setData, post, errors } = useForm({
        nombre: '',
        cedula: '',
        CodigoMuestra: '',
        tissues_id: '',
        descripcion: '',
        image: null,
    });

    const tissueTypes = [
        { id: 'TEJ001', name: 'Tejido Epitelial' },
        { id: 'TEJ002', name: 'Tejido Conectivo' },
        { id: 'TEJ003', name: 'Tejido Muscular' },
        { id: 'TEJ004', name: 'Tejido Nervioso' },
    ];

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'image') {
            setData(id, files[0]);
        } else {
            setData(id, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
       // post(route('doctor.muestra'), {
      //      onSuccess: () => onClose(),
    //    }
    //);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg p-6 w-96">
                <h2 className="text-lg font-bold mb-4">Crear Nueva Muestra</h2>
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
                            placeholder="Ej: MUE001"
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
                            {tissueTypes.map((tissue) => (
                                <option key={tissue.id} value={tissue.id}>{tissue.name}</option>
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
                            Crear Muestra
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSampleForm;
