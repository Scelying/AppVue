<template>
  <v-container v-if="datosDummy">
    <span v-once>{{ nombre }} - {{ apellido }}</span>
    <p v-html="html"></p>
    <p v-if="nombre === 'Gustavo'">Soy Yo</p>
    <v-btn class="ma-2" color="primary" @click="alerta('Hola')" dark>
      Generar alerta
    </v-btn>
    <span :class="{ danger: active, primary: !active }">{{ split }}</span>
    <span :class="[active ? 'primary' : 'danger']">{{ split }}</span>
    <span>{{ reversed }}</span>
    <h1 v-if="loading">Cargando...</h1>
    <h1 v-else>Bienvenido...</h1>
    <div v-show="semaforo">
      <h1 v-if="color === 'rojo'">Frene</h1>
      <h1 v-else-if="color === 'amarillo'">Precaucion</h1>
      <h1 v-else-if="color === 'verde'">Siga</h1>
      <h1 v-else>Revise su color porque no tiene sentido</h1>
    </div>
  </v-container>
  <v-container v-else>
    <ul>
      <v-card
        class="mx-auto my-12 text-center"
        max-width="374"
        v-for="vehiculoTemporal in vehiculos"
        :key="vehiculoTemporal.id"
      >
        <v-img height="250" :src="vehiculoTemporal.foto"></v-img>

        <v-card-title class="text-center-component">{{ vehiculoTemporal.nombre }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">{{ vehiculoTemporal.medio }}</div>
        </v-card-text>
      </v-card>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    html: '<span style="color:red">Hola Mundo</span>',
    arreglo: [5, 4, 3, 2, 1],
    active: false,
    loading: true,
    color: "morado",
    semaforo: false,
    datosDummy: false,
    vehiculos: [
      {
        id: 0,
        medio: "Auto",
        foto: "https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg",
        nombre: "BMW",
      },
      {
        id: 1,
        medio: "Motocicleta",
        foto: "https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg",
        nombre: "Ducati",
      },
      {
        id: 2,
        medio: "Bus",
        foto: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain",
        nombre: "Volvo",
      },
      {
        id: 3,
        medio: "Motocicleta",
        foto: "https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg",
        nombre: "BMW",
      },
      {
        id: 4,
        medio: "Auto",
        foto: "https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg",
        nombre: "Mazda",
      },
      {
        id: 5,
        medio: "Auto",
        foto: "https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg",
        nombre: "Ferrari",
      },
      {
        id: 6,
        medio: "Auto",
        foto: "https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg",
        nombre: "Volvo",
      },
    ],
  }),
  props: {
    nombre: String,
    apellido: String,
  },
  methods: {
    alerta: (parametro) => {
      alert(parametro + " mundo");
    },
    reversedName1: () => {
      return this.html + " metodo";
    },
  },
  computed: {
    split() {
      return this.html.split(" ");
    },
    reversed() {
      let copia = this.arreglo;
      return copia.reverse();
    },
  },
  watch: {
    html: function (newValueHtml, oldValueHtml) {
      console.log(newValueHtml, oldValueHtml);
    },
  },
  beforeCreate: function () {
    console.log("1. Clico de vida de un componente beforeCreated");
  },
  created: function () {
    console.log("2. Clico de vida de un componente created");
  },
  beforeMount: function () {
    console.log("3. Clico de vida de un componente beforeMount");
  },
  mounted: function () {
    console.log("4. Clico de vida de un componente mounted");
    //console.log(`loading: ${this.loading}`);
    setTimeout(() => {
      this.loading = !this.loading;
    }, 5000);
  },
  beforeUpdate: function () {
    console.log("5. Clico de vida de un componente beforeUpdated");
  },
  updated: function () {
    console.log("6. Clico de vida de un componente updated");
  },
  beforeUnmount: function () {
    console.log("7. Clico de vida de un componente beforeUnmount");
  },
  unmounted: function () {
    console.log("8. Clico de vida de un componente unmounted");
  },
};
</script>

<style scoped>
.primary {
  color: blue;
}
.danger {
  color: red;
}
.text-center-component {
  display: flow-root
}
</style>
