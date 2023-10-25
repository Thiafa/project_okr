<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Okr extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'objective',
        'taskone',
        'tasktwo',
        'taskthree',
        'taskfour',
        'taskfive',
        'project_id',
        'user_id',
    ];
}
