<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function Home(){
        return Inertia::render('Landing/Home');
    }
    public function Gente(){
        
        return Inertia::render('Landing/Gente');
    }
    public function Proyectos(){
        
        return Inertia::render('Landing/Proyectos');
    }
    
    public function Contactos(){
        
        return Inertia::render('Landing/Contactos');
    }
}
