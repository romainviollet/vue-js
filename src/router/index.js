import { createWebHistory, createRouter } from "vue-router";
import ComposantAccueil from "@/components/ComposantAccueil";
import ComposantMeteo from "@/components/ComposantMeteo";
import ComposantBlog from "@/components/ComposantBlog";
import ComposantPost from "@/components/ComposantPost";
import NotFound from "@/components/NotFound";

const routes = [
    { path: "/", component: ComposantAccueil },
    { path: "/meteo", name: "ComposantMeteo", component: ComposantMeteo },
    { path: "/blog", component: ComposantBlog },
    //id permet de rajouter des paramètres après l'url
    { path: "/blogpost/:id", component: ComposantPost },
    { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
