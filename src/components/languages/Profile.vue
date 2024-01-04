<template>
    <div>
        <h1 v-if="profile">{{ profile }}'s Profile</h1>
    </div>
</template>

<script>
    import { useRoute } from "vue-router";
    export default {
        name: 'Profile',
        data() {
            return {
                profile: ''
            }
        },
        mounted() {
            const route = useRoute()
            console.log(route.params)
            this.profile = route.params.name;
        }
    }
</script>

<style>

</style>