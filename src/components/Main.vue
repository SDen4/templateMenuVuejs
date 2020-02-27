<template>
    <div class="menu">
        <div class="menu__title">
            <h1>Simple template Menu</h1>
        </div>
        <div class="menu__content">

            <nav class="nav">
                <router-link class="nav__item" to="/about">About</router-link>
                <router-link class="nav__item" to="/settings">Settings</router-link>
                <router-link class="nav__item" to="/feedback">Feedback</router-link>
            </nav>

            <div class="menu__info">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
</style>