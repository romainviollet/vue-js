import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import "./assets/css/output.css";

// Permet de faire communiquer deux composants pas dans la même branche...
//Rappel le fichier main.js est tout en haut de l'arbre des composants
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
// createApp(App).use(Routes).mount("#app");
app.use(router).mount("#app");
