<template>
    <div id="app">
        <header-top></header-top>
        <div class="my-32 px-6">
            <router-view />
        </div>
    </div>
</template>

<script>
import ComposantHeader from "./components/ComposantHeader.vue";
export default {
    name: "App",
    components: {
        "header-top": ComposantHeader,
    },
};
</script>

<style></style>
