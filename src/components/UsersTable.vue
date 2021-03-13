<template>
    <b-table
        :data="users"
    >        
        <b-table-column label="" v-slot="props">
            <EditButton :id="props.row.id" /> 
        </b-table-column>

        <b-table-column label="ФИО" v-slot="props">
            {{ getShortName(props.row) }}
        </b-table-column>

        <b-table-column label="Дата рождения" v-slot="props">
            {{ cutDate(props.row.dateOfBirth) }}
        </b-table-column>

        <b-table-column label="Место рождения" v-slot="props">
            {{ props.row.placeOfBirth }}
        </b-table-column>

        <b-table-column label="Почта" v-slot="props">
            {{ props.row.email }}
        </b-table-column>

        <b-table-column label="Телефон" v-slot="props">
            {{ props.row.tel }}
        </b-table-column>

        <b-table-column label="Дата регистрации" v-slot="props">
            {{ cutDate(props.row.createdAt) }}
        </b-table-column>

        <b-table-column label="Дата посещения" v-slot="props">
            {{ cutDate(props.row.updatedAt) }}
        </b-table-column>

        <b-table-column label="" v-slot="props">
            <DeleteButton :id="props.row.id" /> 
        </b-table-column>
    </b-table>
</template>

<script>
import EditButton from "@/components/buttons/EditButton"
import DeleteButton from "@/components/buttons/DeleteButton"

export default {
    name: 'UserTable',

    components: {
        EditButton, DeleteButton
    },

    data() {
        return {

        }
    },

    methods: {
        cutDate(date) {
            let newDate = new Date(date)

            return newDate.getDate() + '.' + (newDate.getMonth()+1) + '.' + newDate.getFullYear()
        },

        getShortName(props) {
            return `${props.surname} ${props.name.slice(0, 1)}. ${props.patronymic.slice(0, 1)}.`
        }
    },

    computed: {
        users(){
            return this.$store.getters['user/getUsers']
        }
    },

    mounted() {
        this.$store.dispatch('user/getUsers')
    }
}
</script>