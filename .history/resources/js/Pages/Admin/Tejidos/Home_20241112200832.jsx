import React from 'react';
import { Link } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayoutA';

export default function Home({ auth, typeTissues }) {
    return (
        <Authenticated user={auth.user} >

<div className="p-32 bg-gray-100 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold text-gray-700">Lista de Tipos de Tejido</h2>
                <Link href="/Admin/Tejidos/create" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow">
                    + Crear Tipo de Tejido
                </Link>
            </div>
            <table className="w-full bg-white rounded-lg shadow">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3">Código</th>
                        <th className="px-4 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {typeTissues.map((typeTissue) => (
                        <tr key={typeTissue.id} className="border-t hover:bg-gray-50">
                            <td className="px-4 py-3 text-gray-700">{typeTissue.name}</td>
                            <td className="px-4 py-3 text-gray-600">{typeTissue.codigo}</td>
                            <td className="px-4 py-3 flex space-x-2">
                                <Link
                                    href={`/Admin/Tejidos/${typeTissue.id}/edit`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
                                >
                                    Editar
                                </Link>
                                <Link
                                    href={`/Admin/Tejidos/${typeTissue.id}`}
                                    method="delete"
                                    as="button"
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
                                    >
                                    Eliminar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                    </Authenticated>
    );
}
