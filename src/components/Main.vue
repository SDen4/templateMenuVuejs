<template lang="pug">
    .menu
        header.header
            h1 Simple template Menu
        main.menu__content
            nav.nav
                router-link.nav__item(exact-active-class='nav_active', to='/') About
                router-link.nav__item(exact-active-class='nav_active', to='/settings') Settings
                router-link.nav__item(exact-active-class='nav_active', to='/feedback') Feedback
            .menu__info
                router-view
        footer.footer
            h2 Footer
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
</style>