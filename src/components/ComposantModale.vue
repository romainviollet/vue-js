<template>
    <div
        v-if="revele"
        class="fixed flex justify-center items-center w-full h-full left-0 top-0 z-20"
    >
        <div
            class="bg-black/50 fixed top-0 left-0 bottom-0 right-0"
            v-on:click="toggleModale"
        ></div>
        <div class="relative">
            <div class="shadow-lg flex flex-col w-full bg-white rounded-md">
                <div
                    class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
                >
                    <h2 class="text-xl font-medium text-gray-800">Titre</h2>
                </div>
                <div class="p-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi, tempore!
                </div>
                <div
                    class="flex items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
                >
                    <button
                        v-on:click="toggleModale"
                        type="button"
                        class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ComposantModale",
    props: ["revele", "toggleModale"],
};
</script>
<style></style>
