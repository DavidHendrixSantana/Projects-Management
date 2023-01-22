import {createStore} from "vuex"
import axiosClient  from "../axios";

const tmpProjects =[
    {
        id:1,
        user_id:1,
        title: 'Laravel Project',
        slug: 'laravel-project',
        status: 1,
        image:'https://images.freeimages.com/vhq/images/previews/43c/leather-stamping-logo-mockup-2-397107.jpg',
        description: 'New laravel test project',
        created_at : '2022-10-26 14:30:00',
        updated_at : '2022-10-26 14:30:00',
    },
    {
        id:2,
        user_id:1,
        title: 'Laravel Project',
        slug: 'laravel-project',
        status: 1,
        image:'https://images.freeimages.com/vhq/images/previews/43c/leather-stamping-logo-mockup-2-397107.jpg',
        description: 'New laravel test project',
        created_at : '2022-10-26 14:30:00',
        updated_at : '2022-10-26 14:30:00',
    },
]

const store = createStore({
    state:{
        user:{
            data:{ },
            token:sessionStorage.getItem("TOKEN"),
        },
        currentProject:{
            loading:false,
            data:{}
        },
        projects:[...tmpProjects]
        
       
    },
    getters:{},
    actions:{
        getProject({commit}, id){
            commit("setCurrentProjectLoading",true);
            return axiosClient
            .get(`/project/${id}`)
            .then((res)=>{
                commit("setCurrentProject",res.data)
                commit("setCurrentProjectLoading",false)
                return res
            }).catch((err)=>{
                commit("setCurrentProjectLoading", false)
                throw err
            })
        },
        saveProject({commit}, project){
            delete project.image_url
            let response;
            if(project.id){
                response = axiosClient
                .put(`/project/${project.id}`, project)
                .then((res)=>{
                    commit("updateProject", res.data)
                    return res
                })
            }else{
                response = axiosClient.post("/project", project).then((res)=>{
                    commit("saveProject", res.data)
                    return res

                })
            }
            return response
        },

        deleteProject({commit},id){

            return axiosClient
            .delete(`/project/${id}`)

        },

        register({commit}, user){

            // Request with fectch 
            // return fetch('http://localhost:8000/api/register',{
            //     headers:{
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     method: "POST",
            //     body: JSON.stringify(user),
                
            // }).then((res) => res.json())
            // .then((res) => {
            //     commit("setUser", res);
            //     return res;
            // })

            // Request with axios
            return axiosClient.post('/register',user)
            .then((data)=>{
                commit('setUser', data)
                return data
            })
        },

        login({commit},user){
            return axiosClient.post('/login',user)
            .then(({data})=>{
                commit('setUser', data)
                return data
            })
   
        },
        logout({commit}){
            return axiosClient.post('/logout')
            .then(response =>{
                commit('logout')
                return response
            })
        }

    },
    mutations:{
        saveProject: (state,project)=>{
            state.projects = [...state.projects, project.data]
        },
        
        setCurrentProjectLoading: (state, loading)=>{
            state.currentProject.loading = loading
        },

        // deleteProject:(state,project){


        // },
        
        setCurrentProject:(state, project)=>{
            state.currentProject.data=project.data

        }
        ,
        updateProject: (state,project)=>{
            state.projects = state.projects.map((p)=>{
                if(p.id == project.data.id){
                    return project.data
                }
                return p
            })

        }          ,


        logout: (state) =>{
            state.user.data = {};
            state.user.token= null;
            sessionStorage.removeItem("TOKEN")
        },
        setUser: (state, userData) =>{
            state.user.token = userData.token
            state.user.data = userData.user
            sessionStorage.setItem('TOKEN',userData.token)
        }
    },

    modules:{},
})

export default store