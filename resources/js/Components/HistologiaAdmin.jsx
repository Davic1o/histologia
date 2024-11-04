import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { PencilIcon, TrashIcon, EyeIcon } from 'lucide-react';

const HistologiaAdmin = () => {
    const [tissues, setTissues] = useState([]);
    const [filter, setFilter] = useState({ tissue: '', name: '' });

    // Función auxiliar para formatear fechas
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

    useEffect(() => {
        // Simulación de datos con información adicional
        const mockData = [
            {
                id: 1,
                code: 'TSS001',
                category: 'Tejido Epitelial',
                name: 'Epitelio Simple',
                enabled: true,
                virtualMicroscope: true,
                lastModified: new Date(),
                modifiedBy: 'Juan Pérez',
            },
            {
                id: 2,
                code: 'TSS002',
                category: 'Tejido Conectivo',
                name: 'Tejido Adiposo',
                enabled: false,
                virtualMicroscope: true,
                lastModified: new Date(),
                modifiedBy: 'María García',
            },
        ];
        setTissues(mockData);
    }, []);

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilter(prevFilter => ({ ...prevFilter, [id]: value }));
    };

    const resetFilters = () => {
        setFilter({ tissue: '', name: '' });
    };

    const handleToggleEnable = (id) => {
        setTissues(prevTissues =>
            prevTissues.map(tissue =>
                tissue.id === id ? { ...tissue, enabled: !tissue.enabled } : tissue
            )
        );
    };

    const handleView = (id) => {
        console.log('Ver detalles del tejido:', id);
    };

    const handleEdit = (id) => {
        console.log('Editar tejido:', id);
    };

    const handleDelete = (id) => {
        console.log('Eliminar tejido:', id);
    };

    const filteredTissues = tissues.filter(tissue => 
        (filter.tissue === '' || tissue.category === filter.tissue) &&
        (filter.name === '' || tissue.name.toLowerCase().includes(filter.name.toLowerCase()))
    );

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Categoría de Tejido</label>
                    <select
                        id="tissue"
                        className="w-full rounded-lg border border-gray-300 p-2"
                        value={filter.tissue}
                        onChange={handleFilterChange}
                    >
                        <option value="">Todos los tejidos</option>
                        {Array.from(new Set(tissues.map(t => t.category))).map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Buscar por nombre</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-gray-300 p-2"
                        placeholder="Buscar por nombre"
                        value={filter.name}
                        onChange={handleFilterChange}
                    />
                </div>
                <Button
                    onClick={resetFilters}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Resetear Filtros
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Código</th>
                            <th className="p-3 text-left">Categoría</th>
                            <th className="p-3 text-left">Nombre</th>
                            <th className="p-3 text-center">Estado</th>
                            <th className="p-3 text-left">Última Modificación</th>
                            <th className="p-3 text-left">Modificado por</th>
                            <th className="p-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTissues.map(tissue => (
                            <tr key={tissue.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{tissue.code}</td>
                                <td className="p-3">{tissue.category}</td>
                                <td className="p-3">{tissue.name}</td>
                                <td className="p-3 text-center">
                                    <Switch
                                        checked={tissue.enabled}
                                        onCheckedChange={() => handleToggleEnable(tissue.id)}
                                    />
                                </td>
                                <td className="p-3">
                                    {formatDate(tissue.lastModified)}
                                </td>
                                <td className="p-3">{tissue.modifiedBy}</td>
                                <td className="p-3">
                                    <div className="flex justify-center gap-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleView(tissue.id)}
                                        >
                                            <EyeIcon className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleEdit(tissue.id)}
                                        >
                                            <PencilIcon className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="text-red-600 hover:text-red-700"
                                            onClick={() => handleDelete(tissue.id)}
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistologiaAdmin;