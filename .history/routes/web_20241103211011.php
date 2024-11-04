<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[LandingController::class, 'home'])->name('landing.home');
Route::get('/Gente',[LandingController::class, 'gente'])->name('landing.gente');
Route::get('/Proyectos',[LandingController::class, 'proyectos'])->name('landing.proyectos');
Route::get('/Contactos',[LandingController::class, 'contactos'])->name('landing.contacto');


Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:Doctor'])->group(function () {
        Route::get('/Doctor/Home', [DoctorController::class, 'index'])->name('doctor.home');
    });

    Route::middleware(['role:Administrador'])->group(function () {
        Route::get('/Admin/Home', [AdminController::class, 'index'])->name('admin.home');
    });
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';