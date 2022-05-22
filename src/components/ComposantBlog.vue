<template>
    <h1 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
        Les articles de blog !
    </h1>
    <hr />
    <div class="w-full flex flex-wrap flex-row items-center justify-center">
        <div
            v-bind:key="index"
            v-for="(article, index) in allArticles"
            class="flex"
        >
            <div
                class="flex flex-col w-80 mx-4 my-4 min-h-[250px] p-6 rounded-lg shadow-lg bg-white max-w-sm"
            >
                <router-link v-bind:to="`/blogpost/${index + 1}`">
                    <h2
                        class="text-gray-900 text-lg leading-tight font-medium mb-2"
                    >
                        {{ article.title }}
                    </h2>
                </router-link>
                <p class="text-gray-700 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, adipisci!
                </p>
                <button
                    @click="goPost(index)"
                    type="button"
                    class="inline-block px-6 py-2.5 mt-auto max-w-[150px] bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Lire la suite
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ComposantPage1",
    data() {
        return {
            allArticles: [],
        };
    },
    methods: {
        goPost: function (e) {
            //Permet de naviguer sur la WebApp avec des boutons
            this.$router.push(`/blogpost/${e + 1}`);
        },
    },
    created() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((reponse) => {
                for (const blogpost of reponse.data) {
                    this.allArticles.push(blogpost);
                }
            });
    },
};
</script>

<style></style>
