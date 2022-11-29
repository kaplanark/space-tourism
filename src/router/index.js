import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "../layouts/MainLayout.vue";
import Home from "../views/Home.vue";
import Crew from "../views/Crew.vue";
import Destination from "../views/Destination.vue";
import Technology from "../views/Technology.vue";

const routes = [
    {
        path: "/",
        name: "MainLayout",
        component: MainLayout,
        redirect: "/home",
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'crew',
                name: 'Crew',
                component: Crew
            },
            {
                path: 'destination',
                name: 'Destination',
                component: Destination
            },
            {
                path: 'technology',
                name: 'Technology',
                component: Technology
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});

export default router;