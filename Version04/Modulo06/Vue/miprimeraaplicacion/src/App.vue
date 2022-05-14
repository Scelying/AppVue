<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <!--<HelloWorld v-bind:nombre="nombre" :apellido="apellido" />-->
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data: () => ({
    nombre: 'Adolfo',
    apellido: 'Garcia'
  }),
  components: {
    //HelloWorld,
  }
};
</script>