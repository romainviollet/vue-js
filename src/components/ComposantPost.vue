<template>
    <div>
        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h1
                    class="text-gray-900 text-xl leading-tight font-medium mb-2"
                >
                    {{ articleUnique.title }}
                </h1>
                <p class="text-gray-700 text-base mb-4">
                    {{ articleUnique.body }}
                </p>
                <button
                    @click="goBlog"
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Liste articles
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ComposantPost",
    data() {
        return {
            id: this.$route.params.id, //Permet de récuperer le paramètre ID dans l'url
            articleUnique: [],
        };
    },
    methods: {
        goBlog: function () {
            //Permet de naviguer sur la webApp avec des boutons
            this.$router.push("/blog");
        },
    },
    mounted() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then((reponse) => {
                this.articleUnique = reponse.data;
            });
    },
};
</script>

<style></style>
