const Vehicle = ({ vehicle }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img
        className="font-bold text-xl mb-2"
        src={vehicle.foto}
        alt={vehicle.id}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          {vehicle.medio}
        </div>
        <p className="text-gray-700 text-base text-center">{vehicle.nombre}</p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          Cantidad Interesados
        </div>
        <p className="text-gray-700 text-base text-center">
          {vehicle.cantidadInteresados}
        </p>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Me Gusta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
