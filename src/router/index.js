import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookDetail from '../views/BookDetail.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/book/:id',
        name: 'BookDetail',
        component: BookDetail,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;