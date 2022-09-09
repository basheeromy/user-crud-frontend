<template>
    <user
        :editable="true"
        v-for="(user, i) in users"
        :key="i"
        :user="user"
    />
</template>

<script>
    import user from '@/components/user-component.vue'
export default {
    data(){
        return {
            users: null
        }
    },
    components: {
        user
    }
}
</script>

<style>

</style>
