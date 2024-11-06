<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeTissue extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'codigo',
    ];
    public function muestra()
    {
        return $this->hasMany(Muestra::class);
    }
}
