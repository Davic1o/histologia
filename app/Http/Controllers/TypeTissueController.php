<?php
namespace App\Http\Controllers;

use App\Models\TypeTissue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TypeTissueController extends Controller
{
    // Mostrar la lista de tipos de tejido
    public function index()
    {
        $typeTissues = TypeTissue::all();
        return Inertia::render('Admin/Tejidos/Home', [
            'typeTissues' => $typeTissues,
        ]);
    }

    // Mostrar el formulario de creación de tipo de tejido
    public function create()
    {
        return Inertia::render('Admin/Tejidos/CreateTypeTissue');
    }

    // Guardar un nuevo tipo de tejido
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'codigo' => 'required|string|max:100|unique:type_tissues,codigo',
        ]);

        TypeTissue::create([
            'name' => $validated['name'],
            'codigo' => $validated['codigo'],
            'id_user' => auth()->id(),
        ]);

        return redirect()->route('typeTissues.index')->with('success', 'Tipo de tejido creado exitosamente.');
    }

    // Mostrar el formulario de edición de un tipo de tejido específico
    public function edit(TypeTissue $typeTissue)
    {
        return Inertia::render('Admin/Tejidos/EditTypeTissue', [
            'typeTissue' => $typeTissue,
        ]);
    }

    // Actualizar un tipo de tejido
    public function update(Request $request, TypeTissue $typeTissue)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'codigo' => 'required|string|max:100|unique:type_tissues,codigo,' . $typeTissue->id,
        ]);

        $typeTissue->update($validated);

        return redirect()->route('typeTissues.index')->with('success', 'Tipo de tejido actualizado exitosamente.');
    }

    // Eliminar un tipo de tejido
    public function destroy(TypeTissue $typeTissue)
    {
        $typeTissue->delete();
        return redirect()->route('typeTissues.index')->with('success', 'Tipo de tejido eliminado exitosamente.');
    }
}
