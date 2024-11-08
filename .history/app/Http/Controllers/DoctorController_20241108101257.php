<?php

namespace App\Http\Controllers;

use App\Models\Anotacion;
use App\Models\Imagen;
use App\Models\Muestra;
use App\Models\Paciente;
use App\Models\TypeTissue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class DoctorController extends Controller
{
    public function index()
    {
        $TypeTissues = TypeTissue::all();
        $muestras = Muestra::with('paciente', 'typeTissue')->get();
        $ultimoId = Muestra::max('id')+1; // Obtiene el último ID de la tabla Muestra
    
        return Inertia::render('Doctor/Home', [
            'TypeTissues' => $TypeTissues,
            'muestras' => $muestras,
            'ultimoId' => $ultimoId,
        ]);
    }

    public function muestra(Request $request)
    {

     
        $request->validate([
            'nombre' => 'required|string|max:255',
            'cedula' => 'required|string|max:20',
            'CodigoMuestra' => 'nullable|string|max:255',
            'tissues_id' => 'nullable|string|max:20',
            'descripcion' => 'nullable|string|max:255',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // Validación de la imagen
        ]);
    
        // Crear el paciente
        $paciente = Paciente::create([
            'id_user'=>Auth::id(),
            'name' => $request->nombre,
            'ci' => $request->cedula,
        ]);
    
        // Crear la muestra
        $muestra = Muestra::create([
            'id_user'=>Auth::id(),
            'code' => $request->CodigoMuestra,
            'paciente_id' => $paciente->id,
            'type_tissue_id' => $request->tissues_id,
            'description' => $request->descripcion,
            'id_user' => Auth::id(),
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
    public function update(Request $request, $id)
{
    // Validación de los datos del formulario
    $request->validate([
        'nombre' => 'required|string|max:255',
        'cedula' => 'required|string|max:20',
        'CodigoMuestra' => 'nullable|string|max:255',
        'tissues_id' => 'nullable|string|max:20',
        'descripcion' => 'nullable|string|max:255',
        'imagen' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // Validación de la imagen
    ]);

    // Buscar la muestra por su ID
    $muestra = Muestra::findOrFail($id);

    // Buscar el paciente asociado
    $paciente = $muestra->paciente;

    // Actualizar los datos del paciente
    $paciente->update([
        'name' => $request->nombre,
        'ci' => $request->cedula,
    ]);

    // Actualizar los datos de la muestra
    $muestra->update([
        'code' => $request->CodigoMuestra,
        'type_tissue_id' => $request->tissues_id,
        'description' => $request->descripcion,
    ]);

    // Procesar y almacenar la nueva imagen, si se proporciona
    if ($request->hasFile('imagen')) {
        // Opcional: Eliminar la imagen anterior si existe
        $imagenAnterior = $muestra->imagen; // Asumiendo que hay una relación con la imagen
        if ($imagenAnterior) {
            Storage::disk('public')->delete($imagenAnterior->dzi_path);
            $imagenAnterior->delete();
        }

        // Guardar la nueva imagen
        $path = $request->file('imagen')->store('imagenes', 'public'); // Guardar en storage/app/public/imagenes

        // Crear un nuevo registro de imagen en la base de datos
        Imagen::create([
            'dzi_path' => $path,
            'id_formulario' => $muestra->id, // Relacionar con la muestra actualizada
        ]);
    }

    return redirect()->route('doctor.home')->with('success', 'Muestra actualizada con éxito.');
}




    
}
