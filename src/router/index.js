import { createWebHistory, RouterView } from "vue-router";
import { createLangRouter } from "vue-lang-router";
import translations from "../lang/translations";
import localizedURLs from "../lang/localized-urls";

import Home from "../views/Home.vue";
import Pet from "../views/Pet.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pet/:animal/:name",
    name: "pet-animal-name",
    component: () => import("../views/Pet.vue"),
    children: [
      {
        path: "info",
        name: "pet-id",
        component: Pet
      }
    ]
  }
];

// Initiate router
const langRouterOptions = {
  defaultLanguage: "en",
  translations,
  localizedURLs
};

const routerOptions = {
  routes,
  history: createWebHistory("/")
};

const router = createLangRouter(langRouterOptions, routerOptions);

export default router;
