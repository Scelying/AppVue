<template>
    <v-container>
      <h1>{{content}}</h1>
    </v-container>
</template>

<script>
export default {
  name: "HomeComponent",
  data: () => ({
    content: 'Bienvenido a mi Aplicación'
  })
};
</script>