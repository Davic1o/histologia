<?php

namespace App\Http\Controllers;

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

    public function muestra(Request $request){


        $request->validate([
            'nombre' => 'required|string|max:255',
            'cedula' => 'required|string|max:20',
            'NombreMuestra' => 'nullable|string|max:255',
            'CodigoTejido' => 'nullable|string|max:20',
            'descripcion' => 'nullable|email|max:255',
        ]);

        $paciente = Paciente::create([
            'name'=> $request->nombre,
            'ci'=> $request->cedula,
        ]);

        Muestra::create([
            'code'=>$request->CodigoMuestra,
            'id_pacient'=> $paciente->id,
            'tissues_id'=>$request->tissuesId,
            'description'=>$request->descripcion,

        ]);




        return redirect()->route('clientes.index')->with('success', 'Cliente creado con éxito.');

    }

}
