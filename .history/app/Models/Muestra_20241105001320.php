<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Muestra extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'id_pacient',
        'tissues_id',
        'description',
        'id_imagen',
    ];
    public function pacient()
    {
        return $this->belongsTo(Paciente::class);
    }
    public function tissues()
    {
        return $this->belongsTo(TypeTissue::class);
    }
}
