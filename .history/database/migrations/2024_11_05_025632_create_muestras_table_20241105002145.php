<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuestrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('muestras', function (Blueprint $table) {
            $table->id(); // Crea una columna 'id' auto-incremental
            $table->string('code')->unique(); // Crea una columna 'code' de tipo string y única
            $table->foreignId('paciente_id')->constrained('pacientes'); // Crea una columna 'id_pacient' que referencia la tabla 'pacientes'
            $table->foreignId('tissues_id')->constrained('type_tissues'); // Crea una columna 'tissues_id' que referencia la tabla 'type_tissues'
            $table->text('description')->nullable(); // Crea una columna 'description' de tipo text y puede ser nula
            $table->foreignId('id_imagen')->nullable()->constrained('imagenes'); // Crea una columna 'id_imagen' que referencia la tabla 'imagenes', puede ser nula
            $table->timestamps(); // Crea las columnas 'created_at' y 'updated_at'
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('muestras');
    }
}
