import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayoutA';

export default function Home({ auth, muestras }) {
  // Usamos useForm para manejar el formulario de visibilidad
  const { patch } = useForm();

  // Función para manejar el cambio de visibilidad
  const handleVisibilityChange = (id, currentVisibility) => {
    // Cambiar el valor de visibilidad (invertirlo)
    const newVisibility = !currentVisibility;

    // Enviar la solicitud PATCH para actualizar el campo visibilidad
    patch(`/Admin/Muestras/${id}/update-visibility`, { visibilidad: newVisibility }, {
      preserveScroll: true,  // Mantiene la posición en la página después de la actualización
    }).then(() => {
      // Opcional: Puedes manejar la respuesta aquí si necesitas hacer algo después de la actualización
      console.log(`Visibilidad de la muestra ${id} actualizada a ${newVisibility}`);
    }).catch(error => {
      console.error('Error al actualizar visibilidad:', error);
    });
  };

  return (
    <Authenticated user={auth.user}>
      <div className="p-32 bg-gray-100 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-700">Lista de Muestras</h2>
          <Link href="/Admin/Muestras/create" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md shadow">
            + Crear Muestra
          </Link>
        </div>
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="px-4 py-3">Código</th>
              <th className="px-4 py-3">Paciente</th>
              <th className="px-4 py-3">Tipo de Tejido</th>
              <th className="px-4 py-3">Visibilidad</th>
              <th className="px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {muestras.map((muestra) => (
              <tr key={muestra.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">{muestra.code}</td>
                <td className="px-4 py-3 text-gray-700">{muestra.paciente.name}</td>
                <td className="px-4 py-3 text-gray-700">{muestra.type_tissue.name}</td>
                <td className="px-4 py-3 flex items-center space-x-2">
                  {/* Switch para visibilidad */}
                  <label htmlFor={`visibilidad-${muestra.id}`} className="inline-flex items-center cursor-pointer">
                    <span className="mr-2 text-gray-700">Visible</span>
                    <input
                      id={`visibilidad-${muestra.id}`}
                      type="checkbox"
                      checked={muestra.visibilidad} // Aquí usas el valor de visibilidad
                      onChange={() => handleVisibilityChange(muestra.id, muestra.visibilidad)} // Llama a la función de cambio
                      className="form-checkbox h-5 w-5 text-green-500"
                    />
                  </label>
                </td>
                <td className="px-4 py-3 flex space-x-2">
                  <Link href={`/Admin/Muestras/${muestra.id}/edit`} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                    Editar
                  </Link>
                  <Link
                    href={`/Admin/Muestras/${muestra.id}`}
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
