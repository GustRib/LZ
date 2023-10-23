import {createRouter, createWebHistory} from  "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Request from "../views/RequestPassword.vue";
import Reset from "../views/ResetPassword.vue";

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
        path: '/RequestPassword',
        name: 'RequestPassword',
        component: Request
    },
    {
        path: '/ResetPassword/token',
        name: 'ResetPassword',
        component: Reset
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
