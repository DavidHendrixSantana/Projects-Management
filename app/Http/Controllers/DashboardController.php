<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Project;
use App\Http\Resources\ProjectResource;

class DashboardController extends Controller
{
    public function index(Request $request){

        //Total number of projects
        $total = Project::query()->where('status',1)->count();

        //Last project
        $latest = Project::query()->where('status',1)->latest('created_at')->first();

        return [
            'totalProjects'=> $total,
            'latestProject' => $latest ? new ProjectResource($latest) : null
        ];
    }
}
