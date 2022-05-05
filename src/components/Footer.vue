<template>
  <footer>
    <language-switcher
      v-slot="{ links }"
      tag="select"
      @change="switchLanguage"
      active-class="true"
    >
      <option
        v-for="link in links"
        :key="link.langIndex"
        :value="link.url"
        :selected="Boolean(link.activeClass)"
      >
        {{ link.langName }}
      </option>
    </language-switcher>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    switchLanguage(e) {
      window.location = e.target.value;
    },
  },
};
</script>

<style>
footer {
  position: fixed;
  width: 100%;
  padding: 10px;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #eee;
}
</style>