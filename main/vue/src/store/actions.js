import axios from 'axios';

let actions={
        UPDATE_FOOT:({state,commit},payload)=>{
            commit('UPDATE_FOOT',payload)
        },
        UPDATE_USER:({state,commit},payload)=>{
            return axios({
                url:'/api/login',
                params:{
                    username:payload.username,
                    password:payload.password,
                    // nikename:payload.nikename
                }
            }).then(
                res=>{
                    commit('UPDATE_USER',res.data)
                    return res.data                   
                }
            )
        },
        UPDATE_LOADING:({state,commit},payload)=>{
            commit('UPDATE_LOADING',payload)
          },
        UPDATE_HOME:({state,commit},payload)=>{
            axios({url:'/api/home1'}).then(
                res=>{
                    commit('UPDATE_HOME',res.data.data);
                }
            );
        },
        
        
}

export default actions;