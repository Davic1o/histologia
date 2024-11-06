<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormularioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formulario', function (Blueprint $table) {
            $table->id(); // Crea una columna 'id' auto-incremental
            $table->date('fecha'); // Crea una columna 'fecha' de tipo date
            $table->unsignedBigInteger('id_procedimiento_muestra'); // Crea una columna 'id_procedimiento_muestra' de tipo unsignedBigInteger
            $table->text('descripcion_procedimiento'); // Crea una columna 'descripcion_procedimiento' de tipo text
            $table->string('dimension_macroscopica'); // Crea una columna 'dimension_macroscopica' de tipo string
            $table->string('textura_macroscopica'); // Crea una columna 'textura_macroscopica' de tipo string
            $table->unsignedBigInteger('id_microscopia_type'); // Crea una columna 'id_microscopia_type' de tipo unsignedBigInteger
            $table->float('indice_mitotico', 8, 2)->nullable(); // Crea una columna 'indice_mitotico' de tipo float
            $table->string('estado'); // Crea una columna 'estado' de tipo string
            $table->unsignedBigInteger('id_tipo_marcadores'); // Crea una columna 'id_tipo_marcadores' de tipo unsignedBigInteger
            $table->string('clasificacion_tnm'); // Crea una columna 'clasificacion_tnm' de tipo string
            $table->text('recomendaciones')->nullable(); // Crea una columna 'recomendaciones' de tipo text
            $table->timestamps(); // Crea las columnas 'created_at' y 'updated_at'
            
            // Opcional: agregar las claves foráneas si tienes las tablas relacionadas
            $table->foreign('id_procedimiento_muestra')->references('id')->on('procedimiento_muestra')->onDelete('cascade');
            $table->foreign('id_microscopia_type')->references('id')->on('microscopia_type')->onDelete('cascade');
            $table->foreign('id_tipo_marcadores')->references('id')->on('tipo_marcadores')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('formulario');
    }
}
