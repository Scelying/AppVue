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
  },
  watch: {
    html: function (newValueHtml, oldValueHtml) {
      console.log(newValueHtml, oldValueHtml);
    }
  },
  beforeCreate: function() {
    console.log('1. Clico de vida de un componente beforeCreated');
  },
  created: function() {
    console.log('2. Clico de vida de un componente created');
  },
  beforeMount: function() {
    console.log('3. Clico de vida de un componente beforeMount');
  },
  mounted: function() {
    console.log('4. Clico de vida de un componente mounted');  
  },
  beforeUpdate: function() {
    console.log('5. Clico de vida de un componente beforeUpdated');  
  },
  updated: function() {
    console.log('6. Clico de vida de un componente updated'); 
  },
  beforeUnmount: function() {
    console.log('7. Clico de vida de un componente beforeUnmount');  
  },
  unmounted: function() {
    console.log('8. Clico de vida de un componente unmounted');  
  }
};
</script>