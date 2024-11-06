import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HistologiaDoctor from '@/Pages/Doctor/Components/HistologiaDoctor';
import { Head } from '@inertiajs/react';

export default function Home({ auth, TypeTissues }) {
    console.log(TypeTissues)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <HistologiaDoctor/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}