// resources/js/Pages/Admin/User/CreateUser.jsx

import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

import Authenticated from '@/Layouts/AuthenticatedLayoutA';

export default function CreateUser({auth}) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/users');
    }

    return (
        <Authenticated user={auth.user} >

        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-semibold">Nombre</label>
                    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="border p-2 w-full" />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Email</label>
                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="border p-2 w-full" />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Contraseña</label>
                    <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} className="border p-2 w-full" />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Confirmar Contraseña</label>
                    <input type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="border p-2 w-full" />
                    {errors.password_confirmation && <p className="text-red-500">{errors.password_confirmation}</p>}
                </div>

                <div className="mb-4">
                    <label className="block font-semibold">Rol</label>
                    <select value={data.role} onChange={e => setData('role', e.target.value)} className="border p-2 w-full">
                        <option value="">Selecciona un rol</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                    {errors.role && <p className="text-red-500">{errors.role}</p>}
                </div>

                <button type="submit" disabled={processing} className="bg-blue-500 text-white py-2 px-4 rounded">Guardar</button>
            </form>
        </div>
        </Authenticated>
    );
}
