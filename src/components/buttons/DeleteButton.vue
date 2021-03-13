<template>
    <b-button
        class="is-danger is-outlined"
        @click="onClick(id)"
    >
        <span class="icon">
            <i class="fas fa-trash-alt"></i>
        </span>

        <span>Удалить</span>
    </b-button>
</template>

<script>
import Agreement from "@/components/modals/Agreement"

export default {
    props: ['id'],
    components: {
        Agreement
    },

    methods: {
        onClick(id) {
            this.$buefy.modal.open({
                parent: this,
                component: Agreement,
                hasModalCard: true,
                customClass: 'custom-class custom-class-2',
                trapFocus: true,
                events: {
                    'onDelete': () => {
                        this.onDelete(id)
                    }
                }
            })
      
            // this.$store.dispatch('users/onDelete', id)
        },

        onDelete(id) {
            console.log(id)
        }
    }
}
</script>