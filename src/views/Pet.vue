<template>
    <h1>{{ animalName() }}</h1>
</template>

<script>
export default {
  methods: {
    animalName() {
      const animal = this.$route.params.animal;
      const name = this.$route.params.name;
      return this.$t(`pet.${animal}`, { name });
    },
  },
};
</script>