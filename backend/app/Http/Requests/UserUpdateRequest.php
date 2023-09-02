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
        return true;
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
            'email' => 'required|email|max:255|unique:users,email,' . $this->user()->id . ',id',
            'last_name' => 'required|string|max:255',
            'link_profile' => 'url|max:255',
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
            'required' => 'The :attribute field is required.',
            'unique' => ':attribute already exists.',
            'email' => 'Invalid email format.',
            'link_profile.url' => 'Invalid URL format for link profile.',
        ];
    }
}
