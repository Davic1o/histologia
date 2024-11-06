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
            $table->id();
            $table->date('fecha');
            $table->foreignId('id_procedimiento_muestra')->constrained('procedimiento_muestra')->onDelete('cascade'); // Asegúrate de que la tabla procedimiento_muestra existe
            $table->string('descripcion_procedimiento');
            $table->string('dimension_macroscopica')->nullable();
            $table->string('textura_macroscopica')->nullable();
            $table->foreignId('id_microscopia_type')->constrained('microscopia_type')->onDelete('cascade'); // Asegúrate de que la tabla microscopia_type existe
            $table->float('indice_mitotico')->nullable();
            $table->string('estado')->nullable();
            $table->foreignId('id_tipo_marcadores')->constrained('tipo_marcadores')->onDelete('cascade'); // Asegúrate de que la tabla tipo_marcadores existe
            $table->string('clasificacion_tnm')->nullable();
            $table->text('recomendaciones')->nullable();
            $table->timestamps();
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
