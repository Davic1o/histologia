<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{

    protected $fillable=[
'id_user',
'dzi_path',
    ];
    use HasFactory;
}
