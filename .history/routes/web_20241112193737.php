<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

Route::middleware('auth')->group(function () {
    Route::middleware(['role:Administrador'])->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::put('/users/{user}/update-permission', [UserController::class, 'updatePermission'])->name('users.updatePermission');
        Route::get('/Doctor/Home', [DoctorController::class, 'index'])->name('doctor.home');
        Route::post('/Doctor', [DoctorController::class, 'muestra'])->name('doctor.muestra');
        Route::post('/Anotacion', [MuestraController::class, 'anotacion'])->name('doctor.anotacion');
        Route::put('/Doctor/update/{id}', [DoctorController::class, 'update'])->name('doctor.update');
   

    });

});

Route::get('/',[LandingController::class, 'home'])->name('landing.home');
Route::get('/Gente',[LandingController::class, 'gente'])->name('landing.gente');
Route::get('/Proyectos',[LandingController::class, 'proyectos'])->name('landing.proyectos');
Route::get('/Contactos',[LandingController::class, 'contactos'])->name('landing.contacto');


Route::middleware(['auth'])->group(function () {
    Route::middleware(['role:Doctor'])->group(function () {
        Route::get('/Doctor/Home', [DoctorController::class, 'index'])->name('doctor.home');
        Route::post('/Doctor', [DoctorController::class, 'muestra'])->name('doctor.muestra');
        Route::post('/Anotacion', [MuestraController::class, 'anotacion'])->name('doctor.anotacion');
        Route::put('/Doctor/update/{id}', [DoctorController::class, 'update'])->name('doctor.update');
    });

    Route::middleware(['role:Administrador'])->group(function () {
        Route::get('/users', [UserController::class, 'index'])->name('users.index');
        Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
        Route::post('/users', [UserController::class, 'store'])->name('users.store');
        Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
        Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
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