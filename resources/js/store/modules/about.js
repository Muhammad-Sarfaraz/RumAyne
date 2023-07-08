export default {
    namespaced: true,
    state: {
        data: {
            title:"",
        },
    },
    getters: {
        getTitle(state){
            return state.data.title
        },
       
    },
    actions: {
        async getTitle({commit}){
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const json = await data.json()
            commit('setTitle', json.title);
        },
        actionWithData({commit},{transfer}){
            console.log(transfer)
        },
        deleteTitle(context,id){
            console.log('id',id);
            context.commit("deleteTitle","")
        }
    },
    mutations: {
        setTitle(state,payload){
            state.data.title = payload;
        },
        deleteTitle(state,payload){
            state.data.title = payload;
        }
    }
}