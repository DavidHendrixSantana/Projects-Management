import {createStore} from "vuex"
import axiosClient  from "../axios";

const tmpProjects =[
    {
        id:1,
        user_id:1,
        title: 'Laravel Project',
        slug: 'laravel-project',
        status: 1,
        description: 'New laravel test project',
        created_at : '2022-10-26 14:30:00',
        updated_at : '2022-10-26 14:30:00',
    }
]

const store = createStore({
    state:{
        user:{
            data:{ },
            token:sessionStorage.getItem("TOKEN"),
        }
       
    },
    getters:{},
    actions:{
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