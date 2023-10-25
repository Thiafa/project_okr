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
            'name' => fake()->name(),
            'objective' => fake()->text(),
            'taskone' => fake()->text(),
            'tasktwo' => fake()->text(),
            'taskthree' => fake()->text(),
            'taskfour' => fake()->text(),
            'taskfive' => fake()->text(),
            'project_id' => 1,
            'user_id' => 1,
        ];
    }
}
