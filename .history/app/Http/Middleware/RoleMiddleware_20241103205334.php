<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Maneja una solicitud entrante.
     */
    public function handle(Request $request, Closure $next, $role)
    {
        // Verifica si el usuario está autenticado
        if (Auth::check()) {
            // Verifica si el rol del usuario coincide con el rol especificado
            if (Auth::user()->role === $role) {
                return $next($request);  // Permite acceso
            } else {
                // Redirecciona si el rol no coincide
                return redirect()->route('no-autorizado');
            }
        }

        return redirect('login');  // Redirige al login si no está autenticado
    }
}
