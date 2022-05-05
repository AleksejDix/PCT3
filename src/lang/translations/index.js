import preloadedMessages from "./en.json";

export default {
  en: {
    name: "English",
    messages: preloadedMessages
  },
  cs: {
    name: "Česky",
    load: () => {
      return import("./cs.json");
    }
  }
};
