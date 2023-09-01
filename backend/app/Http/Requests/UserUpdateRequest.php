<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users|max:255', // Replace 'users' with your actual table name
            'last_name' => 'required|string|max:255',
            'link_profile' => 'required|url|max:255',
        ];
    }

    /**
     * Get the messages rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function messages()
    {
        return [
            'name.required' => 'The :value field is required.',
            'email.required' => 'The email field is required.',
            'email.email' => 'Invalid email format.',
            'email.unique' => 'Email already exists.',
            'last_name.required' => 'The last name field is required.',
            'link_profile.required' => 'The link profile field is required.',
            'link_profile.url' => 'Invalid URL format for link profile.',
        ];
    }
}
