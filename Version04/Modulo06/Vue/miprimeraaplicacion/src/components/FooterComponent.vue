<template>
  <v-footer dark padless>
    <v-card class="flex" flat>
      <v-card-text class="py-2 white--text text-center">
        <strong>Hecho Con Amor por {{owner}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
      owner: 'Pepito Perez'
  })
};
</script>
