<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestra extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'code',
        'paciente_id',      // Cambiado de 'id_pacient' a 'paciente_id'
        'type_tissue_id',    // Cambiado de 'tissues_id' a 'type_tissue_id'
        'description',
        'id_imagen',
        'id_user',
        'visibilidad',
    ];

    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    public function typeTissue()
    {
        return $this->belongsTo(TypeTissue::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
