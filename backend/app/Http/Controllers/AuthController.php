<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use App\Mail\WelcomeEmail;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');
        try {
            if (Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = JWTAuth::fromUser($user);
                return response()->json(['token' => $token], 200);
            }
            return response()->json(['message' => 'Unauthorized'], 401);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json(['message' => 'ERROR!'], 401);
        }

    }

    public function register(Request $request){
        try {
            //code...
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
            Mail::to($user->email)->send(new WelcomeEmail($user->name));
            $user->save();
            return response()->json(['message' => 'User registered successfully'], 201);
        } catch (\Throwable $th) {
            throw $th;
            return response()->json(['message' => 'ERROR!'], 401);
        }

    }
}
