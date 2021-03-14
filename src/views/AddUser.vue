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

    methods: {
        onSubmit() {
            this.$store.dispatch('user/addUser')
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