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
            $table->foreign('id_imagen')->constrained('imagenes')->onDelete('cascade');
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade'); 
            $table->text('anotacion'); // Crea una columna 'anotacion' de tipo text
            $table->string('tag'); // Crea una columna 'tag' de tipo string
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
        Schema::dropIfExists('anotaciones');
    }
}