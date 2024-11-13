<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use App\Models\Paciente;
use App\Models\TypeTissue;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            'users'=>$user,
        ]);
    }

    // Guardar una nueva muestra
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|max:255|unique:muestras,code',
            'paciente_id' => 'required|exists:pacientes,id',
            'type_tissue_id' => 'required|exists:type_tissues,id',
            'description' => 'nullable|string',
        ]);

        Muestra::create(array_merge($validated, [
            'id_user' => auth()->id(),
        ]));

        return redirect()->route('muestras.index')->with('success', 'Muestra creada exitosamente.');
    }

    // Mostrar el formulario de edición de una muestra específica
    public function edit(Muestra $muestra)
    {
        $pacientes = Paciente::all();
        $typeTissues = TypeTissue::all();
        return Inertia::render('Admin/Muestras/EditMuestra', [
            'muestra' => $muestra,
            'pacientes' => $pacientes,
            'typeTissues' => $typeTissues,
        ]);
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
