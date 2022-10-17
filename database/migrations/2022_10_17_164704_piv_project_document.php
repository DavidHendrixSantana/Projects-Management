<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PivProjectDocument extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('piv_project_document', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\Project::class, 'project_id');
            $table->foreignIdFor(\App\Models\Document::class, 'document_id');
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
