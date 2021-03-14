<template>
    <section>
        <b-field label="Фамилия">
            <b-input
                :value="this.$store.state.user.editForm.surname"
                @input="onChange($event, 'surname')"
                required
            ></b-input>
        </b-field>

        <b-field label="Имя">
            <b-input 
                :value="this.$store.state.user.editForm.name"
                @input="onChange($event, 'name')"  
                required
            ></b-input>
        </b-field>

        <b-field label="Отчество">
            <b-input 
                :value="this.$store.state.user.editForm.patronymic"
                @input="onChange($event, 'patronymic')"  
                required
            ></b-input>
        </b-field>

        <b-field label="Дата рождения">
            <b-input
                :value="this.$store.state.user.editForm.dateOfBirth"
                @input="onChange($event, 'dateOfBirth')"
                type="date"
                required
            ></b-input>
        </b-field>

        <b-field label="Место рождения">
            <b-input 
                :value="this.$store.state.user.editForm.placeOfBirth"
                @input="onChange($event, 'placeOfBirth')"  
                required
            ></b-input>
        </b-field>

        <b-field label="Электронная почта">
            <b-input 
                :value="this.$store.state.user.editForm.email"
                @input="onChange($event, 'email')"
                type="email" 
                required
            ></b-input>
        </b-field>

        <b-field label="Телефон">
            <b-input 
                :value="this.$store.state.user.editForm.tel"
                @input="onChange($event, 'tel')"
                type="number"
                required
            ></b-input>
        </b-field>
    </section>
</template>

<script>
export default {
    methods: {
        onChange(value, index) {
            this.$store.commit('user/onChangeForm', {
                value, index
            })
        }
    }
}
</script>