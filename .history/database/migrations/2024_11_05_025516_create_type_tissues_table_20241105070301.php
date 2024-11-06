<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTypeTissuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_tissues', function (Blueprint $table) {
            $table->id(); // Crea una columna 'id' auto-incremental
            $table->foreignId('id_user')->constrained('user')->onDelete('cascade'); 
            $table->string('name'); // Crea una columna 'name' de tipo string
            $table->string('codigo');
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
        Schema::dropIfExists('type_tissues');
    }
}
