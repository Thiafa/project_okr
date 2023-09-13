<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);
// ? Route to received and confirm to email and send a link to email (post)
Route::post('/forgot-password', [ForgotPasswordController::class, 'forgotPassword']);
// ? Route to reset password (post)
Route::post('/reset-password/{token}', [ResetPasswordController::class, 'reset']);

Route::middleware('jwt.auth')->group(function () {
    Route::get('/teste', function () {
        return "Olá mundo";
    });
    Route::resource('user', UserController::class)->except('edit', 'create');
    Route::patch('user/avatar/{user}', [UserController::class, 'uploadAvatar']);
    Route::delete('user/avatar/{user}', [UserController::class, 'deleteAvatar']);
});
