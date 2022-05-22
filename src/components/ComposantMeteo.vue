<template>
    <div>
        <h1 class="text-2xl w-full text-center mb-10 md:text-4xl">
            App météo avec Vue.js
        </h1>
        <div>
            <label
                for="position"
                class="form-label inline-block mb-2 text-gray-700"
                >Entrez le nom d'une ville</label
            >
            <input
                id="position"
                v-model="requete"
                v-on:keypress="goMeteo"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Nom de la ville"
            />
        </div>
        <div
            class="flex justify-center flex-col items-center mt-8"
            v-if="temps"
        >
            <h2 class="font-medium text-xl mb-4">
                Position : {{ temps.name }}
            </h2>
            <div class="border p-8 text-center rounded-md border-slate-300">
                <p class="mb-3 text-slate-600">
                    Température : {{ temps.main.temp.toFixed() }}
                </p>
                <p class="text-slate-600">
                    Temps : {{ temps.weather[0].description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ApiCode from "../configApiMeteo";

export default {
    name: "ComposantMeteo",
    data() {
        return {
            requete: "",
            temps: undefined,
            api_code: ApiCode.apiKey,
            url_recherche: "https://api.openweathermap.org/data/2.5/weather?",
        };
    },
    methods: {
        goMeteo(e) {
            if (e.key == "Enter") {
                axios
                    .get(
                        `${this.url_recherche}q=${this.requete}&units=metric&APPID=${this.api_code}&lang=fr`
                    )
                    .then((reponse) => {
                        console.log(reponse.data);
                        this.temps = reponse.data;
                    });
                this.requete = "";
            }
        },
    },
};
</script>

<style></style>
