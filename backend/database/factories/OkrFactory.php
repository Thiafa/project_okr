<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class OkrFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'objective' => fake()->text(),
            'taskone' => fake()->text(),
            'tasktwo' => fake()->text(),
            'taskthree' => null,
            'taskfour' => null,
            'taskfive' => null,
            'project_id' => 1,
            'user_id' => 1,
        ];
    }
}
