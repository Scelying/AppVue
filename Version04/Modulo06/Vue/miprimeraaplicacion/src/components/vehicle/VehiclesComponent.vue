<template>
  <v-container>
    <h1 v-if="loading">Cargando...</h1>
    <ul v-else>
      <div v-for="vehicle in vehicles" :key="vehicle.id">
        <VehicleComponent :data="vehicle" />
      </div>
    </ul>
  </v-container>
</template>
<script>
import VehicleComponent from "./VehicleComponent";
import { getVehicles } from "../../services/Vehiculos";

export default {
  name: "VehiclesComponent",
  data: () => ({
    vehicles: [],
    loading: true,
  }),
  components: {
    VehicleComponent
  },
  mounted() {
    getVehicles().then((response) => {
      this.vehicles = response;
      this.loading = false;
    });
  }
};
</script>
