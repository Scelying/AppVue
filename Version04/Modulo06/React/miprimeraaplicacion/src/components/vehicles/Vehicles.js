import Vehicle from './Vehicle'

const Vehicles = ({ vehicles }) => {
  return (
    <>
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {vehicles.map((vehicle) => (
        <Vehicle vehicle={vehicle} key={vehicle.id}/>
      ))}
    </div>
    </>    
  );
};

export default Vehicles;
