<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\CanResetPassword;
use App\Notifications\ResetPasswordNotification;

class User extends Authenticatable implements JWTSubject, CanResetPassword
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'last_name',
        'avatar',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime:Y-m-d H:i:s',
        'password' => 'hashed',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function scopeSearch(Builder $query, $request)
    {
        return $query->when($request->email, function (Builder $query, string $email) {
            return $query->where('email', 'like', '%' . $email . '%');
        })
            ->when($request->name, function (Builder $query, $name) {
                return $query->where('name', 'like', '%' . $name . '%');
            })
            ->when($request->last_name, function (Builder $query, $last_name) {
                return $query->where('last_name', 'like', '%' . $last_name . '%');
            });
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function sendPasswordResetNotification($token)
    {
        $client_url = 'http://localhost:5173/';
        $url =  $client_url . '?' . $token;
        $this->notify(new ResetPasswordNotification($url));
    }
}
