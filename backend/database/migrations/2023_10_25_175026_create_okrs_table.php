<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('okrs', function (Blueprint $table) {
            $table->id();
            $table->string('objective');
            $table->string('taskone');
            $table->string('tasktwo');
            $table->string('taskthree')->nullable();
            $table->string('taskfour')->nullable();
            $table->string('taskfive')->nullable();
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('project_id')->references('id')->on('projects');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('okrs', function (Blueprint $table) {
            $table->dropForeign('project_id');
            $table->dropForeign('user_id');
        });
        Schema::dropIfExists('okrs');
    }
};
