<template>
    <div class="is-flex">
        <b-field label="Поле сотрировки:" class="mr-5">
            <b-select placeholder="" v-model="sortField">
                <option value="surname">ФИО</option>
                <option value="email">e-mail</option>
            </b-select>
        </b-field>

        <b-field label="Сортировать по:">
            <b-select placeholder="" v-model="order">
                <option value="asc">Возрастанию</option>
                <option value="desc">Убыванию</option>
            </b-select>
        </b-field>
    </div>
</template>

<script>
export default {
    computed: {
        sortField: {
            get() {
                return this.$store.getters['user/getSortField']
            },
            set(value) {
                this.$store.dispatch('user/setSortField', value)
            }
        },

        order: {
            get() {
                return this.$store.getters['user/getOrder']
            },
            set(value) {
                this.$store.dispatch('user/setOrder', value)
            }
        }
    }
}
</script>