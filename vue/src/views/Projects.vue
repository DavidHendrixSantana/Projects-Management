<template>
<page-component title="Projects">
  <template v-slot:header>
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Projects</h1>
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
  </template>

  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="project in projects" :key="project.id" class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]" >
      <img src="project.image" alt="" class="w-full h-48 object-cover">
      <h4 class="mt-4 text-lg font-bold" >{{project}}</h4>
      <div v-html="project.description" class="overflow-hidden flex-1"></div>
    </div>
  </div>

</page-component>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue"
</script>

<style>

</style>