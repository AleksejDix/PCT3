<template>
  <div>
    <i18n-t keypath="see-documentation" tag="p">
      <template #link>
        <a href="https://www.npmjs.com/package/vue-lang-router" target="_blank">
          <span>{{ $t("documentation") }}</span>
        </a>
      </template>
    </i18n-t>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>