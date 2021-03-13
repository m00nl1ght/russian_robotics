import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
    users: [],

    paginate: {
        total: 0,
        current: 1,
        perPage: 2,
    },

    editForm: {
        name: "",
        surname: "",
        patronymic: "",
        dateOfBirth: "",
        placeOfBirth: "",
        email: "",
        tel: ""
      }
})

// getters
const getters = {
    getUsers: state => state.users,
    getTotalPage: state => state.paginate.total,
    getCurrentPage: state => state.paginate.current,
    getPerPage: state => state.paginate.perPage
}

// actions
const actions = {
    getUsers(context) {
        HTTP.get(`/users?_page=${context.state.paginate.current}&_limit=${context.state.paginate.perPage}`)
        .then(response => {
            context.commit('getUsers', response)
        })
        .catch(err => console.log(err))
    },

    paginate(context, page) {
        context.commit('paginate', page)
        context.dispatch('getUsers')
    },
}

// mutations
const mutations = {
    getUsers(context, credentials) {
        context.users = credentials.data
        context.paginate.total = credentials.headers['x-total-count']
    },

    paginate(context, page) {
        context.paginate.current = page
    },

    onChangeForm(context, credentials) {
        context.editForm[credentials.index] = credentials.value
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}