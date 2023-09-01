<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $data = User::paginate(10);
        return response()->json(
            [
                "msg" => "User searched with success!",
                "data" => $data,
                'status' => true,
            ]
        );
    }
    public function show(string $user): mixed
    {
        $data = User::findOrFail($user);
        return response()->json(
            [
                "msg" => "User searched with success!",
                "data" => $data,
                'status' => true,
            ]
        );
    }
    public function store(UserUpdateRequest $request, string $user): mixed
    {
        $request->validate(['']);
        return 'asd';
    }
    public function update()
    {
    }
    public function delete()
    {
    }
}
