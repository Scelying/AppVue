<template>
  <v-card class="overflow-hidden">
    <v-app-bar absolute color="deep-purple accent-4" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            <router-link to="/inicio">Incicio</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/comunicacionComponentes">Comunicación Componentes</router-link>
          </v-tab>
          <v-tab>
           <router-link to="/consumoAPI">Consumo de APIs</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="auto"
    >
      <v-container style="height: 113px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    title: "Mi Primera Aplicación",
  }),
};
</script>

<style scoped>
  a {
    color: white !important;
    text-decoration: none; 
  }
  a:hover,
  a:focus,
  a:active {
    color: #EDEADE;
    text-decoration: none; 
  } 
</style>
