<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use App\Models\Paciente;
use App\Models\TypeTissue;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Imagen;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class MuestraController extends Controller
{
    // Mostrar la lista de muestras
    public function index()
    {
        $muestras = Muestra::with('paciente', 'typeTissue')->get();
        return Inertia::render('Admin/Muestras/Home', [
            'muestras' => $muestras,
        ]);
    }

    // Mostrar el formulario de creación de muestra
    public function create()
    {
        $pacientes = Paciente::all();
        $users = User::all();
        $typeTissues = TypeTissue::all();
        return Inertia::render('Admin/Muestras/CreateMuestra', [
            'pacientes' => $pacientes,
            'typeTissues' => $typeTissues,
            'users' => $users,
        ]);
    }

    // Guardar una nueva muestra
    
    public function store(Request $request)
    {
        // Validar los datos de entrada
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:muestras,code',
            'paciente_id' => 'required|exists:pacientes,id',
            'type_tissue_id' => 'required|exists:type_tissues,id',
            'description' => 'nullable|string',
            'archivo_zip' => 'required|file|mimes:zip', // Validar que el archivo sea un ZIP
        ]);
    
        // Guardar la muestra
        $muestra = Muestra::create(array_merge($validated, [
            'id_user' => auth()->id(),
        ]));
    
        // Guardar el archivo ZIP
        $zipFile = $request->file('archivo_zip');
        $zipPath = $zipFile->storeAs('public/archivos_zips', $zipFile->getClientOriginalName()); // Ruta de almacenamiento
    
        // Descomprimir el archivo ZIP
        $extractPath = storage_path('app/public/archivos_zips/' . pathinfo($zipPath, PATHINFO_FILENAME));
        $zip = new ZipArchive;
        if ($zip->open(storage_path('app/' . $zipPath)) === TRUE) {
            $zip->extractTo($extractPath); // Extrae el contenido del ZIP
            $zip->close();
        }
    
        // Crear una nueva entrada en la tabla 'imagenes' con la ruta del archivo ZIP
        Imagen::create([
            'id_user' => auth()->id(),
            'dzi_path' => $zipPath, // Ruta del archivo ZIP guardado
        ]);
    
        return redirect()->route('muestras.index')->with('success', 'Muestra creada exitosamente.');
    }
    
























    // Actualizar una muestra
    public function update(Request $request, Muestra $muestra)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:muestras,code,' . $muestra->id,
            'paciente_id' => 'required|exists:pacientes,id',
            'type_tissue_id' => 'required|exists:type_tissues,id',
            'description' => 'nullable|string',
        ]);

        $muestra->update($validated);

        return redirect()->route('muestras.index')->with('success', 'Muestra actualizada exitosamente.');
    }

    // Eliminar una muestra
    public function destroy(Muestra $muestra)
    {
        $muestra->delete();
        return redirect()->route('muestras.index')->with('success', 'Muestra eliminada exitosamente.');
    }
}
