<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
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

        Paciente::create([
            'name'=> $request->nombre,
            'ci'=> $request->cedula,
        ]);



        Cliente::create($request->all());

        return redirect()->route('clientes.index')->with('success', 'Cliente creado con éxito.');

    }

}
