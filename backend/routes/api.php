<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OkrController;
use App\Http\Controllers\ProjectController;

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

// Route::middleware('cors')->group(function () {
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);

Route::post('/forgot-password', [ForgotPasswordController::class, 'forgotPassword']);
Route::post('/reset-password/{token}', [ResetPasswordController::class, 'reset']);

Route::middleware('jwt.auth')->group(function () {
    Route::get('/teste', function () {
        return "Olá mundo";
    });
    Route::resource('user', UserController::class)->except('edit', 'create');
    Route::patch('user/avatar/{user}', [UserController::class, 'uploadAvatar']);
    Route::delete('user/avatar/{user}', [UserController::class, 'deleteAvatar']);
    Route::resource('okr', OkrController::class)->except('edit', 'create');
    Route::resource('project', ProjectController::class)->except('edit', 'create');
});
// });
