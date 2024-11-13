<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeTissue extends Model
{
    use HasFactory;
    protected $table = 'type_tissues';
    protected $fillable = [
        'id_user',
        'name',
        'codigo',
    ];

    public function muestras()
    {
        return $this->hasMany(Muestra::class);
    }
}
