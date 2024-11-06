<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeTissue extends Model
{
    use HasFactory;
    protected $table = '';
    protected $fillable = [
        'name',
        'codigo',
    ];

    public function muestras()
    {
        return $this->hasMany(Muestra::class);
    }
}
