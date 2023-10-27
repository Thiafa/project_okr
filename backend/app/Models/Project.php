<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Okr;
use Illuminate\Contracts\Database\Query\Builder;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description'
    ];
    public function okrs()
    {
        return  $this->hasMany(Okr::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user');
    }


    public function scopeSearch(Builder $query, $request)
    {
        return;
    }
}
