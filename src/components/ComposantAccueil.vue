<template>
    <div>
        <h2 class="text-3xl font-semibold mt-0 mb-10 text-gray-800 md:text-6xl">
            {{ titre }}
        </h2>
        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            Affichage d'un composant enfant avec utilisation des props
        </h2>
        <!-- Composant Liste -->
        <ComposantListe v-bind:myArr="myArr" v-bind:txt="txt">
            <!-- Slot -->
            <template v-slot:info>
                <h2
                    class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl"
                >
                    Slots
                </h2>
                <p class="text-base font-light mt-4 mb-4 text-gray-800">
                    Cette phrase a juste pour but de présenter le fonctionnement
                    des slots sous VueJS.
                </p>
            </template>
        </ComposantListe>
        <h2 class="text-2xl font-semibold mt-0 mb-5 text-gray-800 md:text-4xl">
            Système d'onglets
        </h2>
        <div class="w-full border-t border-l border-r rounded-5 lg:w-1/2">
            <div class="p-4">
                <ul
                    class="flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
                >
                    <li>
                        <button
                            autofocus
                            v-on:click="component = 'ComposantTexte1'"
                            type="button"
                            class="bg-gray-200 text-gray-700 block font-medium text-xs uppercase rounded w-full md:w-auto px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 focus:bg-blue-600 focus:text-white"
                        >
                            Onglet 1
                        </button>
                    </li>
                    <li>
                        <button
                            v-on:click="component = 'ComposantTexte2'"
                            type="button"
                            class="bg-gray-200 text-gray-700 block font-medium text-xs uppercase rounded w-full md:w-auto px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0 focus:bg-blue-600 focus:text-white"
                        >
                            Onglet 2
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-full border lg:w-1/2">
            <div>
                <component class="p-5" v-bind:is="component"></component>
            </div>
        </div>

        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            Modale
        </h2>
        <!-- Button modale -->
        <button
            v-on:click="toggleModale"
            type="button"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            Ouvre la modale
        </button>

        <ComposantModale
            v-bind:revele="revele"
            :toggleModale="toggleModale"
        ></ComposantModale>

        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            Appel à une API avec Axios
        </h2>
        <img class="w-40" v-bind:src="urlImg" />

        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            Formulaire
        </h2>
        <form class="w-full lg:w-1/2">
            <div>
                <label for="prenom" class="inline-block mb-2 text-gray-700"
                    >Prénom</label
                >
                <input
                    v-on:input="toggleResult"
                    v-model="formData.prenom"
                    id="prenom"
                    type="text"
                    class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    placeholder="Prénom"
                />
                <!-- 
                Si on ajoute .number à v-model les chiffres tapés seront retournés sous forme de number et non de chaine de charactères 
                <input v-model.number="formData.prenom" type="number" id="prenom" class="form-control"> -->
            </div>
            <div class="mt-5">
                <label for="txtForm" class="inline-block mb-2 text-gray-700"
                    >Texte</label
                >
                <!-- On lie la value du champ à la propriété en question dans data() -->
                <textarea
                    v-model="formData.txtForm"
                    id="txtform"
                    class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    placeholder="Texte"
                />
                <!-- 
                    Si on ajoute .lazy à v-model c'est au moment où on quitte le champs que les données s'inscrivent et on à chaque appuie sur une touche...
                    .lazy et .number sont des modifiers
                    <textarea v-model.lazy="formData.txtForm" class="form-control" id="txtForm"></textarea>
                 -->
            </div>

            <div class="my-5">
                <div>
                    <input
                        v-model="formData.checkFruits"
                        class="appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 checked:bg-[url('../check.svg')] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value="Fraise"
                        id="fraise"
                    />
                    <label class="inline-block text-gray-700" for="fraise">
                        Fraise
                    </label>
                </div>
                <div>
                    <input
                        v-model="formData.checkFruits"
                        class="appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 checked:bg-[url('../check.svg')] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        value="Pomme"
                        id="pomme"
                    />
                    <label class="inline-block text-gray-700" for="pomme">
                        Pomme
                    </label>
                </div>
            </div>
            <div class="mb-5">
                <label class="inline-block mb-2 text-gray-700">Pays</label>
                <select
                    v-model="formData.select"
                    class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                >
                    <option
                        v-bind:key="index"
                        v-for="(pays, index) in formData.listePays"
                    >
                        {{ pays }}
                    </option>
                </select>
            </div>
            <button
                v-on:click.prevent="envoiForm"
                type="button"
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                Envoyer les données
            </button>
        </form>
        <div v-if="infoSubmit">
            <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
                Résultats
            </h2>
            <div class="border rounded p-5">
                <p>Prénom : {{ formData.prenom }}</p>
                <p>Texte : {{ formData.txtForm }}</p>
                <p>Checkbox :</p>
                <ul>
                    <li
                        v-bind:key="index"
                        v-for="(fruit, index) in formData.checkFruits"
                    >
                        {{ fruit }}
                    </li>
                </ul>
                <p>Choix du select : {{ formData.select }}</p>
            </div>
        </div>

        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            To-do List
        </h2>
        <div>
            <ComposantTodoList v-bind:arrayTodo="arrayTodo"></ComposantTodoList>
        </div>
    </div>
</template>

<script>
import ComposantListe from "./ComposantListe.vue";
import ComposantTodoList from "./ComposantTodoList.vue";
import ComposantTexte1 from "./ComposantTexte1.vue";
import ComposantTexte2 from "./ComposantTexte2.vue";
import ComposantModale from "./ComposantModale.vue";
import axios from "axios";

export default {
    name: "ComposantAccueil",
    //La fonction data retourne un objet
    data() {
        return {
            myArr: [
                { titre: "inception", date: 2010 },
                { titre: "Avatar", date: 2009 },
                { titre: "Seven", date: 1995 },
            ],
            txt: "Hello World",
            titre: "Titre de la Home",
            //La propriété 'component' fait référence au composant ComposantTexte1
            component: "ComposantTexte1",
            revele: false,
            urlImg: null,
            formData: {
                prenom: "",
                txtForm: "",
                checkFruits: [],
                select: "",
                listePays: ["Russie", "Japon", "Canada", "Mexique"],
            },
            infoSubmit: false,
            arrayTodo: [
                { titre: "Javascript" },
                { titre: "Python" },
                { titre: "PHP" },
            ],
            tacheTodo: "",
        };
    },
    methods: {
        toggleModale: function () {
            this.revele = !this.revele;
        },
        envoiForm: function () {
            this.infoSubmit = true;
        },
        toggleResult: function () {
            this.infoSubmit = false;
        },
    },
    components: {
        ComposantListe: ComposantListe,
        ComposantTexte1: ComposantTexte1,
        ComposantTexte2: ComposantTexte2,
        ComposantModale: ComposantModale,
        ComposantTodoList: ComposantTodoList,
    },
    // Appel HTTP avec axios
    mounted() {
        axios
            .get("https://api.thecatapi.com/v1/images/search")
            .then((reponse) => {
                this.urlImg = reponse.data[0].url;
            });
    },
    created() {
        //Quand le composant est créé, alors on passe à l'écoute de l'évènement 'changeTitreHeader'.
        this.emitter.on("changeTitre", (data) => {
            this.titre = data;
        });
    },
};
</script>

<style></style>
