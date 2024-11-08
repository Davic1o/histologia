<?php

namespace App\Http\Controllers;

use App\Models\Anotacion;
use Illuminate\Http\Request;

class MuestraController extends Controller
{
    public function anotacion(Request $request)
{
    // Validar los datos del request
    $request->validate([
        'ImagenID' => 'required|string|max:255',
        'muestra_Id' => 'required|string|max:20',
        'comentario' => 'nullable|string|max:255',
        'etiquetas' => 'nullable|string|max:255',
    ]);

    // Crear la anotación en la base de datos
    $anotacion = Anotacion::create([
        'ImagenID' => $request->ImagenID,
        'id_user' => Auth::id(),
        'anotacion' => $request->comentario, // Asegúrate que este campo se llame 'comentario' en la base de datos
        'tag' => $request->etiquetas, // Corrige el nombre de la variable de 'etiqueta' a 'etiquetas'
        'id_muestra' => $request->muestra_Id,
    ]);

    // Redirigir con un mensaje de éxito
    return redirect()->route('doctor.home')->with('success', 'Anotación creada con éxito.');
}
}