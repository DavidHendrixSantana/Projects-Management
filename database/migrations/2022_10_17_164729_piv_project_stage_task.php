<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PivProjectStageTask extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('piv_project_stage_module_task', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('piv_project_stage_task_id');
            $table->foreignIdFor(\App\Models\Task::class, 'task_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
