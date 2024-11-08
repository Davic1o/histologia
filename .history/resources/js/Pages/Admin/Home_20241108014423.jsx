import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { usePage, useForm } from '@inertiajs/react';

export default function Users({auth, users}) {
    const { users, flash } = usePage().props;
    
    // Inicializa el uso de useForm sin ningún dato predefinido
    const { data, setData, put } = useForm({
        permission: '', // Inicializar vacío
    });

    const handlePermissionChange = (userId, currentPermission) => {
        const newPermission = currentPermission === 'lectura' ? 'total' : 'lectura';

        // Actualizar el permiso en el estado de `data`
        setData('permission', newPermission);

        // Enviar la solicitud de actualización usando `put`
        put(route('users.updatePermission', userId), {
            preserveScroll: true,
            onSuccess: () => {
                // Opcional: lógica adicional al completar la solicitud
                console.log('Permiso actualizado correctamente');
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuarios</h2>

            {flash.success && <div className="mb-4 text-green-600">{flash.success}</div>}

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
                                    {users.length > 0 ? (
                                        users.map((user) => (
                                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                                <td className="p-3">{user.name}</td>
                                                <td className="p-3">{user.email}</td>
                                                <td className="p-3">{user.role}</td>
                                                <td className="p-3">{user.permission}</td>
                                                <td className="p-3">
                                                    <button
                                                        onClick={() => handlePermissionChange(user.id, user.permission)}
                                                        className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                                                    >
                                                        Cambiar Permiso
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="p-3 text-center text-gray-500">
                                                No hay usuarios registrados
                                            </td>
                                        </tr>
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
