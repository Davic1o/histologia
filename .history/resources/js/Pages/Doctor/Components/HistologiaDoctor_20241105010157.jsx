import React, { useState, useEffect } from 'react';
import { PlusIcon } from 'lucide-react';
import HistologiaTable from './HistologiaTable';
import CreateSampleForm from './CreateSampleForm';

const HistologiaDoctor = ({TypeTissues, muestras, ultimoId, user}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
console.log(user)

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex gap-2">
                    {isDialogOpen && (
                        <CreateSampleForm onClose={() => setIsDialogOpen(false)} TypeTissues={TypeTissues} ultimoId={ultimoId} />
                    )}
                    <button
                        onClick={() => setIsDialogOpen(true)}
                        className="bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 flex items-center"
                    >
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Nueva Muestra
                    </button>
                </div>
            </div>

            <HistologiaTable muestras={muestras} TypeTissues={TypeTissues}/>
        </div>
    );
};

export default HistologiaDoctor;
