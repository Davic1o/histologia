<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home(){
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register')
        ]);
    }
    public function gente(){
        
        return Inertia::render('Landing/Gente');
    }
    public function proyectos(){
        
        return Inertia::render('Landing/Proyectos');
    }
    
    public function contactos(){
        
        return Inertia::render('Landing/Contactos');
    }
}
