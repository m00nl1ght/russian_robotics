<template>
    <div class="container py-2">
        <div class="user-add">
            <router-link 
                :to="{name: 'user-add'}"
                class="button is-info"
            >Новый пользователь</router-link>
        </div>

        <UsersTable />
        <Paginate />
    </div>
</template>

<script>
import UsersTable from "@/components/UsersTable"
import Paginate from "@/components/Paginate"

export default {
    name: 'Users',
    components: { UsersTable, Paginate },

    data() {
      return {
      }
    },
}
</script>

<style  scoped>
  .user-add {
    padding: 20px;

    display: flex;
    justify-content: flex-end;
  }

</style>>
