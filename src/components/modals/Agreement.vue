<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Внимание!</p>
                <button
                    type="button"
                    class="delete"
                    @click="$emit('close')"/>
            </header>
            <section class="modal-card-body">
                <p>Подтвердите удаление</p>
            </section>
            <footer class="modal-card-foot">
                <b-button
                    label="Отмена"
                    @click="$emit('close')" />
                <b-button
                    label="Удалить"
                    type="is-danger"
                    @click="onClick" />
            </footer>
        </div>
    </form>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit('onDelete')
            this.$emit('close')
        }
    }
}
</script>