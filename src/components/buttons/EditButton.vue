<template>
    <b-tooltip label="Изменить" position="is-right">  
        <b-button
            class="is-info is-outlined"
            @click="onEdit(id)"
        >
            <span class="icon"><i class="fas fa-edit"></i></span>
        </b-button>
    </b-tooltip>
</template>

<script>
export default {
    props: ['id'],

    methods: {
        onEdit() {
            console.log(this.id)
            // this.$router.push('/user/' + this.id)
        }
    }
}
</script>
