<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(){
        return Inertia::render('Admin/Home');
    }
}