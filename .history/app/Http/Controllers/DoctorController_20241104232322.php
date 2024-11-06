<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use App\Models\Muestra;
use App\Models\Paciente;
use App\Models\TypeTissue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function index(){
        return Inertia::render('Doctor/Home');
    }

    public function muestra(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'cedula' => 'required|string|max:20',
            'NombreMuestra' => 'nullable|string|max:255',
            'CodigoMuestra' => 'nullable|string|max:20',
            'descripcion' => 'nullable|string|max:255',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // Validación de la imagen
        ]);
    
        // Crear el paciente
        $paciente = Paciente::create([
            'name' => $request->nombre,
            'ci' => $request->cedula,
        ]);
    
        // Crear la muestra
        $muestra = Muestra::create([
            'code' => $request->CodigoMuestra,
            'id_pacient' => $paciente->id,
            'tissues_id' => $request->tissuesId,
            'description' => $request->descripcion,
        ]);
    
        // Procesar y almacenar la imagen, si se proporciona
        if ($request->hasFile('imagen')) {
            $path = $request->file('imagen')->store('imagenes', 'public'); // Guardar en storage/app/public/imagenes
    
            // Crear el registro de la imagen en la base de datos
            Imagen::create([
                'dzi_path' => $path,
                'id_formulario' => $muestra->id, // Relacionar con la muestra creada
            ]);
        }
    
        return redirect()->route('doctor.home')->with('success', 'Muestra creada con éxito.');
    }
    
}
