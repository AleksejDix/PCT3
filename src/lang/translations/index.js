import preloadedMessages from "./en.json";

export default {
  en: {
    name: "English",
    messages: preloadedMessages
  },
  de: {
    name: "Deutsch",
    load: () => {
      return import("./de.json");
    }
  }
};
