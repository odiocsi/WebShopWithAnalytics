<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->words(rand(2, 4), true),
            'sku' => fake()->unique()->numerify('SKU-####'),
            'description' => fake()->paragraph(2),
            'price' => fake()->randomFloat(2, 1000, 50000),
            'stock' => fake()->numberBetween(0, 100),
        ];
    }
}
