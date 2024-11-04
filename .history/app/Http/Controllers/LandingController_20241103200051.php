<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home(){
        return Inertia::render('Landing/Home');
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
