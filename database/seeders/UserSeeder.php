<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Crear el usuario Administrador
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('Admin1234'),
            'role' => 'Administrador',  // Asignar el rol de Administrador
            'permission' => 'total',    // Permisos completos, si es necesario
        ]);

        // Crear el usuario Doctor
        User::create([
            'name' => 'Doctor',
            'email' => 'doctor@doctor.com',
            'password' => Hash::make('Doctor1234'),
            'role' => 'Doctor',         // Asignar el rol de Doctor
            'permission' => 'lectura',  // Permisos de lectura, si es necesario
        ]);
    }
}
