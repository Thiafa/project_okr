<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Mail\WelcomeEmail;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = JWTAuth::fromUser($user);
                $user['token'] = $token;
                return response()->success('User logged with success!', $user);
            }
            return response()->json(['message' => 'Unauthorized'], 401);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json(['message' => 'ERROR!'], 401);
        }
    }

    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        $user->save();
        try {
            if (isset($user)) {
                Mail::to($user->email)->send(new WelcomeEmail($user->name));
            }
        } catch (\Throwable $th) {
        }
        return response()->success('User registered successfully', $user);
    }

    public function logout()
    {
        try {
            Auth::logout();
            return response()->success('User logout successfully');
        } catch (\Throwable $th) {
            throw $th;
            return response()->fail('ERROR!');
        }
    }
}
