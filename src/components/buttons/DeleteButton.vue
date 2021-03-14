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
                        this.$store.dispatch('user/deleteUser', id)
                        .then(res => {
                            if(res.status) {
                                this.$buefy.toast.open({
                                    message: res.message,
                                    duration: 3000,
                                    type: 'is-success'
                                })
                            } else {
                                this.$buefy.toast.open({
                                    message: res.message,
                                    duration: 5000,
                                    type: 'is-danger'
                                })
                            }
                        })
                    }
                }
            })
        }
    }
}
</script>