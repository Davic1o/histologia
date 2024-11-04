<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function Home(){
        return Inertia::render('Landing/Home');
    }
}
