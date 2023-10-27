<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{
    use HasFactory;

    protected $table = 'project_user';
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'project_id',
    ];
}
