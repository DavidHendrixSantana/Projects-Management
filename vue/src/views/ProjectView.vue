<template>
  <PageComponent :title=" route.params.id ? model.title : 'Create Project'">
      <template v-slot:header>


        <div class="flex justify-center" v-if="projectLoading">
            Loading...
        </div>
      <form v-else @submit.prevent="saveProject">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

        <!-- Image -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div class="mt-1 flex items-center">
              <img class="w-64 h-48 object-cover" v-if="model.image_url" :src="model.image_url" :alt="model.image_url" >
              <span v-else class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100" >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
   

              </span>
             <button
                type="button"
                class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <input
                  type="file"
                  @change="onImageChoose"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                />
                Change
              </button>
            </div>
          </div>
          <!-- Image -->

      <!-- Title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Title</label
            >
            <input
              type="text"
              name="title"
              id="title"
              v-model="model.title"
              autocomplete="project_slug"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <!--/ Title -->

          
         <!-- Description -->
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="3"
                v-model="model.description"
                autocomplete="project_description"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                placeholder="Describe your project"
              />
            </div>
          </div>
          <!-- Description -->

         <!-- responsable -->
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              Responsible
            </label>
            <div class="mt-1">
              <select name="user_id" v-model="model.user_id" id="user_id" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
>
                <option value="1">David</option>
              </select>
            </div>
          </div>
          <!-- Description -->

          </div>
          <div class="px-4 py-3 bg-gray-50 flex justify-between sm:px-6">

            <button
      v-if="route.params.id"
      type="button"
      @click="deleteProject()"
      class="py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-700 flex  ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>

      Delete Project
      </button>

          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white
          bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
</svg>

            Save
          </button>
        </div>
        </div>
      </form>
       </template>
  </PageComponent>
</template>

<script setup>
import store from "../store"
import {ref, watch,computed} from "vue"
import PageComponent from "../components/PageComponent.vue"
import {useRouter, useRoute} from "vue-router"


const router = useRouter();
const route = useRoute();

const projectLoading = computed(()=>store.state.currentProject.loading)

//Create empty project
let model= ref({
  id:null,
  title:"",
  image:null,
  description:null,
  user_id:null,
  status:1,
  image_url:null
})

//watch to current project data change and when this happens we update local  model
watch(
  ()=>store.state.currentProject.data,
  (newVal, oldVal)=>{
    model.value={
      ...JSON.parse(JSON.stringify(newVal)),
      status: 1

    }
  }
)

if(route.params.id){
  store.dispatch('getProject',route.params.id)

}

function onImageChoose(ev){
  const file = ev.target.files[0]

  const reader = new FileReader()
  reader.onload = ()=>{
    //the field to send on backend and apply validations
    model.value.image = reader.result

    //the field to display here
    model.value.image_url = reader.result
  }
  reader.readAsDataURL(file)
}

function saveProject(){
  store.dispatch("saveProject", model.value).then(({data})=>{
      router.push({
        name:"ProjectView",
        params:{id:data.data.id}
      })
  })
}

function deleteProject(){
  if(confirm(
    'Are you sure you want to delete the project?'
  )){
    store.dispatch("deleteProject", model.value.id).then(()=>{
      router.push({
        name:"Projects",
      })
    })

  }
}

</script>

<style>

</style>