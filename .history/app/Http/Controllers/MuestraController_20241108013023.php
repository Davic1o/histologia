<?php

namespace App\Http\Controllers;

use App\Models\Anotacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MuestraController extends Controller
{
    public function anotacion(Request $request)
{
    // Validar los datos del request


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
