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
            this.$store.dispatch('posts/addPost')
            .then(res => {
                if(res == 'success') {
                    this.$router.go(-1)
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