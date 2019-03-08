import axios from 'axios';
import {router} from '../../main'//test3.................
const state = {
    users: []
}

const actions = {
    getAllUsers({ commit }) {
        //npm install --save axios
        axios.get('http://localhost:3001/users')
            .then(response => {
                commit('setUsers', response.data)
            })
            .catch(e => {
                console.error(e);
            })
    }
    //test3.........................
    ,
    addUserAction({ state, commit }, user) {
        console.log('addUserAction.....' + user.email)
        axios.post('http://localhost:3001/users', user)
            .then(response => {
                if(response.status===200)
                router.go(-1)
            })
            .catch(e => {
                console.error(e);
            })
    }
    //함수명. method
    ,updateUserAction({ state, commit }, user) {//test4........위에 복사해서 작성...
        console.log('updateUserAction.....' + user.email)
        axios.put('http://localhost:3001/users/'+user.id, user)
            .then(response => {
                if(response.status===200)
                router.go(-1)
            })
            .catch(e => {
                console.error(e);
            })
    }
    ,deleteUserAction({ state, commit }, id) {//test5.......................
        console.log('deleteUserAction.....' + id)
        axios.delete('http://localhost:3001/users/'+id)
            .then(response => {
                if(response.status===200)
                    window.location.reload()//........
            })
            .catch(e => {
                console.error(e);
            })
    }
}

// mutations
const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

//test4...............................
const getters = {
    getUserGetter: (state) => (id) => {
        const user= state.users.find(user => user.id==id)
        console.log(user)
        return user
    }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
    ,getters//test4................
}