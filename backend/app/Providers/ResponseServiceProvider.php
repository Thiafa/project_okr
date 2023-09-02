<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Response::macro('success', function ($message, $data = null) {
            return response()->json([
                'status' => true,
                'message' => $message,
                'data' => $data,
            ]);
        });
        Response::macro('fail', function ($message, $data = null) {
            return response()->json([
                'status' => true,
                'message' => $message,
            ]);
        });
        Response::macro('error', function ($message) {
            return response()->json([
                'status' => false,
                'message' => 'An error ocurred : ' . $message,
            ]);
        });
    }
}
