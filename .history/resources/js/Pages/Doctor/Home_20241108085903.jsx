import AuthenticatedLayout from '@/Layouts/AuthenticatedLayoutD';
import HistologiaDoctor from '@/Pages/Doctor/Components/HistologiaDoctor';
import { Head } from '@inertiajs/react';

export default function Home({ auth, TypeTissues, muestras, ultimoId }) {
    console.log(TypeTissues)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Muestras</h2>}
        >
            <Head title="Muestras" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <HistologiaDoctor TypeTissues={TypeTissues} muestras={muestras} ultimoId={ultimoId} user={auth.user}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}