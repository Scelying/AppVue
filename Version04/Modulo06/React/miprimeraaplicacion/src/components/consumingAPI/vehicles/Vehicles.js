import { useState, useEffect } from "react";
import { getVehicles } from "../../../services/Vehicles";
import Vehicle from "./Vehicle";

const Vehicles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
      if(isLoading) {
        getVehicles().then((response) => {
            console.log(response);
            setVehicles(response);
            setIsLoading(false);
          });
      }
  }, [isLoading]);

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {isLoading && vehicles.length === 0 && <p>Cargando Información...</p>}
        {!isLoading &&
          vehicles.map((vehicleTemporal) => (
            <Vehicle vehicle={vehicleTemporal} key={vehicleTemporal.id} />
          ))}
      </div>
    </>
  );
};

export default Vehicles;
