import AuthenticatedLayout from '@/Layouts/AuthenticatedLayoutA';
import React from 'react';
import { usePage, useForm } from '@inertiajs/react';

export default function Home({auth, users}) {
    




    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full border-collapse table-auto">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 text-left">Nombre</th>
                                        <th className="p-3 text-left">Correo Electrónico</th>
                                        <th className="p-3 text-left">Rol</th>
                                        <th className="p-3 text-left">Permiso</th>
                                        <th className="p-3 text-left">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  
                                       { users.map((user) => (
                                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                                <td className="p-3">{user.name}</td>
                                                <td className="p-3">{user.email}</td>
                                                <td className="p-3">{user.role}</td>
                                                <td className="p-3">{user.permission}</td>
                                                <td className="p-3">
                                                    <button
                                                        className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                                                    >
                                                        Cambiar Permiso
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                     
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
            </AuthenticatedLayout>
    );
}
