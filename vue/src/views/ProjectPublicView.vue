<template>
  <div class="py-5 px-8">
    <div v-if="loading" class="flex justify-center" >
            Loading...
    </div>
    <form  v-else class="container mx-auto">
        <div class="grid grid-cols-6 items-center">
            <div class="mr-4">
                <img :src="project.image_url" alt="project.image_url">
            </div>
            <div class="col-span-5">
                <h1 class="text-3xl mb-3">
                {{project.title}}
                </h1>
                <p class="text-gray-500 text-sm" v-html="project.description"></p>

            </div>
        </div>

    </form>

  </div>
</template>

<script setup>
import {computed,ref} from "vue"
import {useRoute} from "vue-router"
import {useStore} from "vuex"

const route = useRoute()
const store = useStore()

const loading = computed(()=> store.state.currentProject.loading)
const project = computed(()=>store.state.currentProject.data)

store.dispatch("getProjectBySlug", route.params.slug)





</script>

<style>

</style>