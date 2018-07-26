<template>
    <div id="app">
        <transition appear name="fade">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        methods: {}
    }
</script>

<style lang="scss">
    @import "/assets/sass/app.scss";
    #app {
        font-family: Helvetica, sans-serif;
        height:100%;
    }
</style>
