<template>
  <v-container>
    <span v-once>{{ nombre }} - {{ apellido }}</span>
    <p v-html="html"></p>
    <p v-if="nombre === 'Gustavo'">Soy Yo</p>
    <v-btn class="ma-2" color="primary" @click="alerta" dark>
      Generar alerta
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    html: '<span style="color:red">Hola Mundo</span>',
  }),
  props: {
    nombre: String,
    apellido: String,
  },
  methods: {
    alerta: function () {
      alert("Hola mundo");
    },
  },
};
</script>