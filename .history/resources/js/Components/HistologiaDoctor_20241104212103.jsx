import React, { useState, useEffect } from 'react';
import { PencilIcon, EyeIcon, PlusIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const HistologiaDoctor = () => {
    const [tissues, setTissues] = useState([]);
    const [tissueTypes, setTissueTypes] = useState([
        { id: 'TEJ001', name: 'Tejido Epitelial' },
        { id: 'TEJ002', name: 'Tejido Conectivo' },
        { id: 'TEJ003', name: 'Tejido Muscular' },
        { id: 'TEJ004', name: 'Tejido Nervioso' },
    ]);
    const [filter, setFilter] = useState({ tissue: '', name: '' });
    const [isEnabled, setIsEnabled] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newSample, setNewSample] = useState({
        // Datos del paciente
        patientName: '',
        patientId: '',
        // Datos de la muestra
        code: '',
        tissueId: '',
        description: '',
        image: null
    });

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
                code: 'MUE001',
                patientName: 'Juan García',
                patientId: '1234567890',
                tissueId: 'TEJ001',
                description: 'Muestra de tejido epitelial',
                imageUrl: 'imagen1.jpg',
                lastModified: new Date(),
                modifiedBy: 'Dr. Juan Pérez',
            },
            {
                id: 2,
                code: 'MUE002',
                patientName: 'María López',
                patientId: '0987654321',
                tissueId: 'TEJ002',
                description: 'Muestra de tejido conectivo',
                imageUrl: 'imagen2.jpg',
                lastModified: new Date(),
                modifiedBy: 'Dra. María García',
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

    const handleView = (id) => {
        console.log('Ver detalles de la muestra:', id);
    };

    const handleEdit = (id) => {
        if (!isEnabled) return;
        console.log('Editar muestra:', id);
    };

    const handleNewSampleChange = (e) => {
        const { id, value, files } = e.target;
        if (id === 'image') {
            setNewSample(prev => ({ ...prev, image: files[0] }));
        } else {
            setNewSample(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleCreateSample = () => {
        // Aquí crearías un FormData si necesitas enviar la imagen
        const formData = new FormData();
        formData.append('patientName', newSample.patientName);
        formData.append('patientId', newSample.patientId);
        formData.append('code', newSample.code);
        formData.append('tissueId', newSample.tissueId);
        formData.append('description', newSample.description);
        if (newSample.image) {
            formData.append('image', newSample.image);
        }

        console.log('Nueva muestra:', formData);
        setIsDialogOpen(false);
        setNewSample({
            patientName: '',
            patientId: '',
            code: '',
            tissueId: '',
            description: '',
            image: null
        });
    };

    return (
        <div className="p-6 space-y-6">
            {/* Filtros y tabla existentes... */}
            <div className="flex flex-col md:flex-row gap-4 items-end">
                {/* ... código de filtros ... */}
                <div className="flex gap-2">
                    <button
                        onClick={resetFilters}
                        className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                        Resetear Filtros
                    </button>
                    {isEnabled && (
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <button className="bg-blue-600 hover:bg-blue-700">
                                    <PlusIcon className="h-4 w-4 mr-2" />
                                    Nueva Muestra
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                    <DialogTitle>Crear Nueva Muestra</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6 py-4">
                                    {/* Sección de Datos del Paciente */}
                                    <div>
                                        <h3 className="text-lg font-medium">Datos del Paciente</h3>
                                        <div className="space-y-4 mt-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="patientName">Nombre Completo</Label>
                                                <Input
                                                    id="patientName"
                                                    value={newSample.patientName}
                                                    onChange={handleNewSampleChange}
                                                    placeholder="Nombre del paciente"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="patientId">Número de Cédula</Label>
                                                <Input
                                                    id="patientId"
                                                    value={newSample.patientId}
                                                    onChange={handleNewSampleChange}
                                                    placeholder="Ej: 1234567890"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Sección de Datos de la Muestra */}
                                    <div>
                                        <h3 className="text-lg font-medium">Datos de la Muestra</h3>
                                        <div className="space-y-4 mt-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="code">Código de Muestra</Label>
                                                <Input
                                                    id="code"
                                                    value={newSample.code}
                                                    onChange={handleNewSampleChange}
                                                    placeholder="Ej: MUE001"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="tissueId">Tipo de Tejido</Label>
                                                <select
                                                    id="tissueId"
                                                    className="w-full rounded-lg border border-gray-300 p-2"
                                                    value={newSample.tissueId}
                                                    onChange={handleNewSampleChange}
                                                >
                                                    <option value="">Seleccione un tejido</option>
                                                    {tissueTypes.map(tissue => (
                                                        <option key={tissue.id} value={tissue.id}>
                                                            {tissue.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="description">Descripción</Label>
                                                <Input
                                                    id="description"
                                                    value={newSample.description}
                                                    onChange={handleNewSampleChange}
                                                    placeholder="Descripción de la muestra"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="image">Imagen</Label>
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleNewSampleChange}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button
                                        variant="outline"
                                        onClick={() => setIsDialogOpen(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button onClick={handleCreateSample}>
                                        Crear Muestra
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>

            {/* Tabla de muestras */}
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
                            <th className="p-3 text-left">Modificado por</th>
                            <th className="p-3 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tissues.map(tissue => (
                            <tr key={tissue.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{tissue.code}</td>
                                <td className="p-3">{tissue.patientName}</td>
                                <td className="p-3">{tissue.patientId}</td>
                                <td className="p-3">{tissueTypes.find(t => t.id === tissue.tissueId)?.name || tissue.tissueId}</td>
                                <td className="p-3">{tissue.description}</td>
                                <td className="p-3">{formatDate(tissue.lastModified)}</td>
                                <td className="p-3">{tissue.modifiedBy}</td>
                                <td className="p-3">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleView(tissue.id)}
                                        >
                                            <EyeIcon className="h-4 w-4" />
                                        </button>
                                        {isEnabled && (
                                            <button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => handleEdit(tissue.id)}
                                            >
                                                <PencilIcon className="h-4 w-4" />
                                            </button>
                                        )}
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

export default HistologiaDoctor;