<template>
    <header
        class="bg-slate-50 fixed top-0 left-0 z-10 w-full flex justify-center items-center"
    >
        <p class="hidden absolute left-0 ml-10 sm:block">{{ titre }}</p>
        <nav class="flex space-x-4">
            <router-link
                to="/"
                exact
                class="font-medium px-3 py-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >Home</router-link
            >
            <router-link
                to="/blog"
                class="font-medium px-3 py-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >Blog</router-link
            >
            <router-link
                to="/meteo"
                class="font-medium px-3 py-4 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
                >Météo</router-link
            >
        </nav>
    </header>
</template>
<script>
export default {
    name: "ComposantHeader",
    data() {
        return {
            titre: "Vue JS",
        };
    },
    // Hooks
    beforeCreate() {
        console.log("Il va être créé !");
    },
    created() {
        console.log("Le composant est créé !");
        //Quand le composant est créé, alors on passe à l'écoute de l'évènement 'changeTitreHeader'.
        this.emitter.on("changeTitreHeader", (data) => {
            this.titre = data;
        });
    },
    beforeMount() {
        console.log("Il va être monté dans le DOM");
    },
    mounted() {
        console.log("Il est intégré dans le DOM");
    },
    beforeUpdate() {
        console.log("Il va se mettre à jour");
    },
    updated() {
        console.log("Le composant s'est mis à jour");
    },
};
</script>
<style scoped>
.router-link-active {
    font-weight: bold;
}
</style>
