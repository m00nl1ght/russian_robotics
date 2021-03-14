import {HTTP} from '@/plugins/axios'
// initial state
const state = () => ({
    users: [],

    paginate: {
        total: 0,
        current: 1,
        perPage: 2,
    },

    sort: {
        sortField: "surname",
        order: "asc"
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
    getPerPage: state => state.paginate.perPage,

    getSortField: state => state.sort.sortField,
    getOrder: state => state.sort.order
}

// actions
const actions = {
    getUsers(context) {
        HTTP.get(`/users?_sort=${context.state.sort.sortField}&_order=${context.state.sort.order}&_page=${context.state.paginate.current}&_limit=${context.state.paginate.perPage}`)
        .then(response => {
            context.commit('getUsers', response)
        })
        .catch(err => console.log(err))
    },

    paginate(context, page) {
        context.commit('paginate', page)
        context.dispatch('getUsers')
    },

    setSortField(context, value) {
        context.commit('setSortField', value)
        context.dispatch('getUsers')
    },

    setOrder(context, value) {
        context.commit('setOrder', value)
        context.dispatch('getUsers')
    },

    addUser(context) {
        return new Promise((resolve, reject) => {
            let currentDate = new Date()

            HTTP.post('/users', {
                ...context.state.editForm,
                'updatedAt': currentDate.toISOString(),
                'createdAt': currentDate.toISOString(),
                'id': Date.now(),
            })
            .then((res) => {
                if(res.status == 201) {
                    context.dispatch('getUsers')
                    context.commit('clearFormValue')
                    resolve({
                        status: true,
                        message: 'Пользователь добавлен'
                    })
                }
            })
            .catch(err => {
                reject({
                  status: false,
                  message: err
                })
            })
        })
    }
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

    setSortField(context, value) {
        context.sort.sortField = value
    },

    setOrder(context, value) {
        context.sort.order = value
    },

    clearFormValue(context) {
        context.editForm = {
            name: "",
            surname: "",
            patronymic: "",
            dateOfBirth: "",
            placeOfBirth: "",
            email: "",
            tel: ""
        }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}