// resources/js/Pages/Admin/User/Home.jsx

import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home({ users }) {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Rol</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.name}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.role}</td>
                            <td className="px-4 py-2">
                                <Link href={`/Admin/User/${user.id}/edit`} className="text-blue-500 mr-2">Editar</Link>
                                <Link href={`/Admin/User/${user.id}`} method="delete" as="button" className="text-red-500">Eliminar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link href="/users/create" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Crear Usuario</Link>
        </div>
    );
}
