<template>
  <div>
    <h1>{{ animalName() }}</h1>
  </div>
</template>

<script>
export default {
  name: "PetDetails",
  methods: {
    animalName() {
      const animal = this.$route.params.animal;
      const name = this.$route.params.name;

      return this.$t(`pet.${animal}`, { name });
    },
  },
};
</script>