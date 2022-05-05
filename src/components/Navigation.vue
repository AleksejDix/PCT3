<template>
  <nav>
    <language-switcher
      v-slot="{ links }"
      active-class="router-link-exact-active"
    >
      <router-link
        v-for="link in links"
        :key="link.langIndex"
        :to="link.url"
        :class="link.activeClass"
        exact-active-class=""
      >
        <img :src="getCountryFlagURL(link.langIndex)" alt="" />
        <span>{{ link.langName }}</span>
      </router-link>
    </language-switcher>

    <localized-link to="/">{{ $t("nav.home") }}</localized-link> |
    <localized-link to="/about">{{ $t("nav.about") }}</localized-link> |
    <localized-link to="/pet/dog/Buddy/info">🐶</localized-link> |
    <localized-link to="/pet/cat/Lily/info">🐱</localized-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    getCountryFlagURL(locale) {
      // Map locales to country codes to use with Country Flags API
      const map = {
        en: "us",
        cs: "cz",
      };
      return `https://flagcdn.com/24x18/${map[locale]}.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-bottom: 60px;
}

a {
  color: #2c3e50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &.router-link-exact-active {
    color: #42b983;
  }
}

.router-language-switcher {
  margin-bottom: 20px;

  a {
    margin: 0 5px;
  }
  img {
    vertical-align: middle;
    margin: 0 5px;
  }
}
</style>