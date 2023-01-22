<template>
<PageComponent title="Projects">
  <template v-slot:header>

    <div class="flex justify-between items-center">
      <h1>
      Projects
    </h1>
        <router-link
        :to="{name: 'ProjectCreate'}"
        class="py-2 px-3 text-white
        bg-emerald-500 rounded-md hover:bg-emerald-600 flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        Add new project
        </router-link>
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
    <ProjectListItem v-for="project in projects" :key="project.id" :project="project" @delete="deleteProject(project)"/>


    </div>
  </template>

</PageComponent>
</template>

<script setup>
import store from "../store"
import { computed } from "vue";  
import PageComponent from "../components/PageComponent.vue"
import ProjectListItem from "../components/ProjectListItem.vue"


const projects = computed(()=>store.state.projects.data)

store.dispatch("getProjects")

function deleteProject(project){
  if(confirm('Are you sure you want to delete this Project?')){
    store.dispatch('deleteProject', project.id)
    .then(()=>
    store.dispatch('getProjects'))
  }
}

</script>

<style>

</style>