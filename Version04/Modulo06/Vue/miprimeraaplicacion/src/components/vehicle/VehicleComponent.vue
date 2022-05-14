<template>
  <v-card
    class="mx-auto my-12 text-center"
    max-width="500"
  >
    <v-img height="250" :src="data.foto"></v-img>

    <v-card-title class="text-center-component">{{
      data.nombre
    }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">{{ data.medio }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "VehicleComponent",
  props: {
    data: {},
  },
};
</script>

<style scoped>
.text-center-component {
  display: flow-root
}
</style>
