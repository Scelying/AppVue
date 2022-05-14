<template>
  <v-container>
    <h1>{{title}}</h1>
  </v-container>
</template>

<script>
export default {
  name: "ChildComponent",
  data: () => ({
      title: 'Componente Hijo'
  })
};
</script>