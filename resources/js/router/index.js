import { createRouter, createWebHistory } from 'vue-router'

import ClientIndex from '../components/clients/ClientIndex.vue';
import ClientCreate from '../components/clients/ClientCreate.vue';
import ClientEdit from '../components/clients/ClientEdit.vue';
const routes = [
    {
        path: '/dashboard',
        name: 'client.index',
        component: ClientIndex
    },
    {
        path: '/client/create',
        name: 'client.create',
        component: ClientCreate
    },
    {
        path: '/client/:id/edit',
        name: 'client.edit',
        component: ClientEdit,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
