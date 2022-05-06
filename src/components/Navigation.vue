<template>
  <nav>
    <language-switcher
      v-slot="{ links }"
    >
      <router-link
        v-for="link in links"
        :key="link.langIndex"
        :to="link.url"
        :class="link.activeClass"
      >
        <span>{{ link.langName }}</span>
      </router-link>
    </language-switcher>

    <localized-link :to="{ name: 'home' }">{{ $t("nav.home") }}</localized-link> |
    <localized-link :to="{ name: 'about' }">{{ $t("nav.about") }}</localized-link> |
    <localized-link :to="{ 
      name: 'pet-animal-name', 
      params: {
        animal: 'cat',
        name: 'Mitzie'
      } 
    }">🐶</localized-link> |
    <localized-link :to="{
      name: 'pet-animal-name', 
      params: {
        animal: 'dog',
        name: 'Charlie'
      } 
    }">🐱</localized-link>
  </nav>
</template>
