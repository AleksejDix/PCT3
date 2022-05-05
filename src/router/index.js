import { createWebHistory, RouterView } from "vue-router";
import { createLangRouter } from "vue-lang-router";
import translations from "../lang/translations";
import localizedURLs from "../lang/localized-urls";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pet from "../views/Pet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "Plugin info",
    component: About
  },
  {
    path: "/pet/:animal/:name",
    name: "Pet",
    component: RouterView,
    children: [
      {
        path: "info",
        name: "Pet details",
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
