import { createWebHistory, createRouter } from "vue-router";
import Java from './components/languages/Java.vue'
import Php from './components/languages/Php.vue'
import Ios from './components/languages/Ios.vue'
import Node from './components/languages/Node.vue'
import Profile from './components/languages/Profile.vue'
import PageNotFound from './components/PageNotFound.vue'

// npm i vue-router@next => package for using routes in vue js

const routes = [
    {
        name: 'Java',
        path: '/',
        component: Java
    },
    {
        name: 'Php',
        path: '/Php',
        component: Php
    },
    {
        name: 'Ios',
        path: '/Ios',
        component: Ios
    },
    {
        name: 'Node',
        path: '/Node',
        component: Node
    },
    {
        name: 'profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;