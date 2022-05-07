import { useState, useEffect } from "react";
import { getVehicles } from "../../services/Vehicles";
import Vehicle from "./Vehicle";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles().then((response) => {
      console.log('response', response);
      setVehicles(response);
    });
  }, []);

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {vehicles && vehicles.map((vehicleTemporal) => (
          <Vehicle vehicle={vehicleTemporal} key={vehicleTemporal.id} />
        ))}
      </div>
    </>
  );
};

export default Vehicles;
