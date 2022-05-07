import { useState, useEffect } from "react";

const ChildComponent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
      setIsLoading(false);
    }
  }, [data]);

  const handleChange = () => {
    console.log("onChange");
  };

  return (
    <>
      {isLoading && (
        <div className="py-72">
          <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <p className="text-center">Cargando Información...</p>
          </div>
        </div>
      )}
      {!isLoading && (
        <select className="form-select form-select-sm
        appearance-none
        block
        w-full"
        multiple={true} value={data} onChange={handleChange}>
          {data.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.nombre}>
              {vehicle.nombre}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default ChildComponent;
