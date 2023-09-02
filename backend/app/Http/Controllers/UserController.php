<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    public function __construct()
    {
    }

    public function index(Request $request)
    {
        $data = User::search($request)->paginate(10);
        if ($data->isEmpty()) {
            return response()->fail("No users found.");
        }
        return response()->success("Users retrieved successfully.", $data);
    }
    public function show(User $user)
    {
        $data = $user;
        return response()->success("User retrieved successfully.", $data);
    }
    public function store(UserStoreRequest $request): mixed
    {
        $data = $request->validated();
        $data['password'] = bcrypt('123456');
        User::create($data);
        return response()->success('User registered successfully.', $data);
    }
    public function update(UserUpdateRequest $request, User $user)
    {

        $user->update($request->all());
        return response()->json(
            [
                "msg" => "User updated with success!",
                "data" => $user,
                'status' => true,
            ]
        );
    }
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(
            [
                "msg" => "User deleted with success!",
                'status' => true,
            ]
        );
    }
}
