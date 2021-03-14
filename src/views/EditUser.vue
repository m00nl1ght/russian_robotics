<template>
    <form class="form" @submit.prevent="onSubmit">
        <FormItems />

        <div class="mt-5 is-flex is-justify-content-flex-end"> 
            <BackButton />

            <b-button class="ml-3" native-type="submit" type="is-success">Сохранить</b-button>
        </div>
    </form>
</template>

<script>
import FormItems from "@/components/forms/FormItems"
import BackButton from "@/components/buttons/BackButton"

export default {
    components: {
        FormItems, BackButton
    },

    mounted() {
        this.$store.dispatch('user/setStartValue', this.$route.params.id)
    },

    methods: {
        onSubmit() {
            this.$store.dispatch('user/editUser', this.$route.params.id)
            .then(res => {
                if(res.status) {
                    this.$buefy.toast.open({
                        message: res.message,
                        duration: 3000,
                        type: 'is-success'
                    })

                    this.$router.go(-1)
                } else {
                    this.$buefy.toast.open({
                        message: res.message,
                        duration: 5000,
                        type: 'is-danger'
                    })
                }
            })
        },
    }
}
</script>

<style scoped>
  .form {
    margin: 0 auto;
    max-width: 400px;
  }
</style>