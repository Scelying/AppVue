<template>
  <v-container>
    <h1>{{title}}</h1>
    <ChildComponent />
  </v-container>
</template>

<script>
import ChildComponent from "./ChildComponent";
export default {
  name: "ParentComponent",
  data: () => ({
      title: 'Componente Principal'
  }),
  components: {
      ChildComponent
  }
};
</script>