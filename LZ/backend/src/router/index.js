import {createRouter, createWebHistory} from  "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Request from "../views/Request-password.vue";
import Reset from "../views/Reset-password.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: Request
    },
    {
        path: '/reset-password/token',
        name: 'reset-password',
        component: Reset
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
