<template>
    <div class="menu">
        <header class="header">
            <h1>Simple template Menu</h1>
        </header>
        <main class="menu__content">

            <nav class="nav">
                <router-link class="nav__item" exact-active-class="nav_active" to="/">About</router-link>
                <router-link class="nav__item" exact-active-class="nav_active" to="/settings">Settings</router-link>
                <router-link class="nav__item" exact-active-class="nav_active" to="/feedback">Feedback</router-link>
            </nav>

            <div class="menu__info">
                <router-view></router-view>
            </div>

        </main>
        <footer class="footer">
            <h2>Footer</h2>
        </footer>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
</style>