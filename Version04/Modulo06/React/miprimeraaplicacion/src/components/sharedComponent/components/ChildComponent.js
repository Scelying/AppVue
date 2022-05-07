import { useState, useEffect } from "react";

const ChildComponent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
      setIsLoading(false);
    }
  }, [data]);

  const handleChange = (event) => {
    let vehiculoSeleccionado = data.filter(dataTemporal => dataTemporal.id === parseInt(event.target.value));
    console.log(vehiculoSeleccionado[0]);
    setSelected(vehiculoSeleccionado[0]);
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
        <div className="py-60">
          <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <select
              className="w-full"
              multiple={true}
              value={data}
              onChange={handleChange}
            >
              {data.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.nombre} - {vehicle.medio}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {
        !isLoading && !selected && <p className="font-extrabold text-center">No ha seleccionado ninguna opción</p>
      }
      {
        !isLoading && selected && <p className="font-extrabold text-center">Usted selecciono: {selected.nombre} - {selected.medio}</p>
      }
    </>
  );
};

export default ChildComponent;
