import { createRouter, createWebHistory } from "vue-router";

// importer les pages
import Home from "../pages/Home.vue";
import Cinenia from "../pages/Cinenia.vue";
import NotreIntention from "../pages/NotreIntention.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/notre-intention",
    name: "notre-intention",
    component: NotreIntention,
  },
  {
    path: "/cinenia",
    name: "cinenia",
    component: Cinenia,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
