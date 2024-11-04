<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[LandingController::class, 'home'])->name('landing.home');
Route::get('/Gente',[LandingController::class, 'gente'])->name('landing.gente');
Route::get('/Proyectos',[LandingController::class, 'proyectos'])->name('landing.proyectos');
Route::get('/Contactos',[LandingController::class, 'contactos'])->name('landing.contacto');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
