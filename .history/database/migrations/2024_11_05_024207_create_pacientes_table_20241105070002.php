<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {
            $table->id(); // Crea una columna 'id' auto-incremental
            $table->foreignId('id_user')->constrained('user')->onDelete('cascade'); 
            $table->string('name'); // Crea una columna 'name' de tipo string
            $table->string('ci')->unique(); // Crea una columna 'ci' de tipo string y debe ser única
            $table->timestamps(); // Crea las columnas 'created_at' y 'updated_at'
            $table->foreignId('id_user')->constrained('user')->onDelete('cascade'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
}

