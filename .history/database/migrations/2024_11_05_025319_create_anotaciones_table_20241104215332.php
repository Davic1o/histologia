<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnotacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anotaciones', function (Blueprint $table) {
            $table->id(); // Crea una columna 'id' auto-incremental
            $table->unsignedBigInteger('id_imagen'); // Crea una columna 'id_imagen' de tipo unsignedBigInteger
            $table->text('anotacion'); // Crea una columna 'anotacion' de tipo text
            $table->string('tag'); // Crea una columna 'tag' de tipo string
            $table->timestamps(); // Crea las columnas 'created_at' y 'updated_at'
            
            // Opcional: agregar la clave foránea si tienes la tabla relacionada
            $table->foreign('id_imagen')->references('id')->on('imagen')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anotaciones');
    }
}