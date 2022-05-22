<template>
    <div class="w-full lg:w-1/2">
        <div class="border-t border-l border-r rounded-5">
            <div class="p-4">
                <ol class="border-l border-gray-300">
                    <li v-for="(film, index) in myArr" v-bind:key="index">
                        <div class="flex flex-start items-center pt-3">
                            <div
                                class="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"
                            ></div>
                            <p class="text-gray-500 text-sm">{{ film.date }}</p>
                        </div>
                        <div class="mt-0.5 ml-4 mb-6">
                            <h4
                                class="text-gray-800 font-semibold text-xl mb-1.5"
                            >
                                {{ film.titre }}
                            </h4>
                            <p class="text-gray-500 mb-3">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque scelerisque diam non
                                nisi semper, et elementum lorem ornare. Maecenas
                                placerat facilisis mollis. Duis sagittis ligula
                                in sodales vehicula.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="p-4 text-center border-t border-b mt-4">
                <button
                    @click="supprFilm"
                    type="button"
                    class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Supprime le film
                </button>
            </div>
        </div>
        <h2 class="text-2xl font-semibold my-5 text-gray-800 md:text-4xl">
            Fonction Emit
        </h2>
        <div class="flex flex-col max-w-sm">
            <button
                @click="changeTitre"
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                Modifier le titre du composant parent
            </button>
            <button
                @click="changeTitreHeader"
                type="button"
                class="inline-block px-6 py-2.5 mt-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out lg-mt-0"
            >
                Modifier le titre du header (autre branche)
            </button>
        </div>
        <!-- On précise au composant enfant qu'il va recevoir des données -->
        <slot name="info"></slot>
    </div>
</template>

<script>
export default {
    name: "ComposantListe",
    data() {
        return {
            myArrLocal: this.myArr,
        };
    },
    methods: {
        supprFilm: function () {
            this.myArrLocal.pop();
        },
        changeTitre: function () {
            //"emitter.emit" permet à tous les composants de pouvoir écouter un évènement avec emitter.on.
            //On émet pour le composant parent (ComposantAccueil)
            this.emitter.emit("changeTitre", "Mon nouveau titre");
        },
        changeTitreHeader: function () {
            //On émet pour un composant d'une autre branche (ComposantHeader)
            this.emitter.emit("changeTitreHeader", "Titre changé avec le bus");
        },
    },
    //Type props
    props: {
        myArr: {
            type: Array,
        },
    },
};
</script>

<style></style>
