<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anotacion extends Model
{
    use HasFactory;

    protected $table = 'Anotaciones';


    protected $fillable =[
        'ImagenID',
        'id_user',
        'anotacion',
        'tag'
    ];
}
