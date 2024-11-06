<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'name',
        'ci',
    ];

    public function muestras()
    {
        return $this->hasMany(Muestra::class);
    }
}
