import {useState, useEffect} from 'react';
import ChildComponent from "./ChildComponent";
import { getVehicles } from "../../../services/Vehicles";

const ParentComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (isLoading) {
      getVehicles().then((response) => {
        setVehicles(response);
        setIsLoading(false);
      });
    }
  }, [isLoading]);
  return <ChildComponent data={vehicles} />;
};

export default ParentComponent;
