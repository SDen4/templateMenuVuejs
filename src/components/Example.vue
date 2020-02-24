<template>
    <div>
        <h1>Section2!</h1>
        <h2>{{message}}</h2>
        <img src="/assets/images/1.jpg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        color: green;
    }
</style>