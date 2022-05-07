const Main = ({vehicles}) => {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {vehicles.map((vehiculo) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          key={vehiculo.foto}
        >
          <img
            className="font-bold text-xl mb-2"
            src={vehiculo.foto}
            alt={vehiculo.id}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {vehiculo.medio}
            </div>
            <p className="text-gray-700 text-base text-center">
              {vehiculo.nombre}
            </p>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Cantidad Interesados
            </div>
            <p className="text-gray-700 text-base text-center">
              {vehiculo.cantidadInteresados}
            </p>
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Me Gusta
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
