<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Storage;

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
    public function uploadAvatar(Request $request, User $user)
    {
        if (auth()->user()->id == $user->id) {
            $path = $request->file('avatar')->store('avatars/' . $user->id);
            $url = strval($user->avatar);

            if (Storage::exists($url)) {
                Storage::delete($url);
                $user->avatar = $path;
                $user->save();
            }
            return response()->success('Avatar photo has been uploaded!', $user);
        }
        return response()->fail('Does not have access!');
    }
    public function deleteAvatar(User $user)
    {
        if (auth()->user()->id == $user->id) {
            if (isset($user->avatar) && Storage::exists(strval($user->avatar))) {
                Storage::delete($user->avatar);
                $user->avatar = null;
                $user->save();
            }
        }
        return response()->success('Avatar photo has been removed!', $user);
    }
}
