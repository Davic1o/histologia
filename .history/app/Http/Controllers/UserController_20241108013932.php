<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // Método para mostrar la lista de usuarios
    public function index()
    {
        $users = User::all();
        return Inertia::render('Admin/Home', [
            'users' => $users,
        ]);
    }

    // Método para actualizar el permiso de un usuario
    public function updatePermission(Request $request, User $user)
    {
        $request->validate([
            'permission' => 'required|in:lectura,total',
        ]);

        $user->update([
            'permission' => $request->permission,
        ]);

        return back()->with('success', 'Permiso actualizado con éxito');
    }
}
