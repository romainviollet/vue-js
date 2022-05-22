<template>
    <div class="w-full lg:w-1/2">
        <label for="action" class="inline-block mb-2 text-gray-700"
            >Tâche à faire</label
        >
        <input
            v-model="tacheTodo"
            id="action"
            type="text"
            class="block w-full px-3 py-1.5 mb-5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            placeholder="Tâche à faire"
        />
        <!-- 
                Si on ajoute .number à v-model les chiffres tapés seront retournés sous forme de number et non de chaine de charactères 
                <input v-model.number="formData.prenom" type="number" id="prenom" class="form-control"> -->
        <button
            v-on:click.prevent="validationTodo"
            type="button"
            class="px-6 py-2.5 mb-5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            Créer une tâche
        </button>

        <div class="flex">
            <ul class="rounded-lg w-96 text-gray-900">
                <li
                    v-for="(itemTodo, index) in arrayTodo"
                    v-bind:key="index"
                    class="px-6 py-2 border-b border-gray-200 w-full first:rounded-t-lg last:rounded-b-lg last:border-0 flex justify-between items-center"
                >
                    {{ itemTodo.titre
                    }}<span @click="deleteItem(index)" class="cursor-pointer"
                        ><img class="w-4" src="../assets/cross.svg"
                    /></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComposantTodoList",
    data() {
        return {
            tacheTodo: "",
            arrayTodoLocal: this.arrayTodo,
        };
    },
    methods: {
        validationTodo: function () {
            this.arrayTodoLocal.push({ titre: this.tacheTodo });
            this.tacheTodo = "";
        },
        deleteItem: function (index) {
            this.arrayTodoLocal.splice(index, 1);
        },
    },
    props: ["arrayTodo"],
};
</script>

<style></style>
