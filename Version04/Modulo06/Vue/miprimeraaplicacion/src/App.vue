<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <v-app>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

export default {
  name: "App",
  data: () => ({
  }),
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
    //HelloWorld,
  }
};
</script>