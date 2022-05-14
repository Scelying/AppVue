<template>
  <v-container>
    <span v-once>{{ nombre }} - {{ apellido }}</span>
    <p v-html="html"></p>
    <p v-if="nombre === 'Gustavo'">Soy Yo</p>
    <v-btn class="ma-2" color="primary" @click="alerta('Hola')" dark>
      Generar alerta
    </v-btn>
    <span>{{split}}</span>
    <span>{{reversed}}</span>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    html: '<span style="color:red">Hola Mundo</span>',
    arreglo: [5,4,3,2,1]
  }),
  props: {
    nombre: String,
    apellido: String,
  },
  methods: {
    alerta: (parametro) => {
      alert(parametro + " mundo");
    },
    reversedName1:() => {
      return this.html + ' metodo';
    }
  },
  computed: {
    split() {
      return this.html.split(' ');
    },
    reversed() {
      let copia = this.arreglo;
      return copia.reverse();
    }
  }
};
</script>