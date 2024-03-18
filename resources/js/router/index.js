import { createRouter, createWebHistory } from "vue-router";
import Add from "../CRUD/AddNew.vue";
import List from "../CRUD/List.vue";
import EditData from "../CRUD/EditData.vue";

const routes = [
    { path: "/", name: 'List', component: List },
    { path: "/add-new", name: 'Add', component: Add },
    { path: "/edit-data/:id", name: 'edit', component: EditData }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
