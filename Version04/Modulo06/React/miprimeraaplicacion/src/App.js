import React from 'react';
import './App.css';

/* componente funcional - App */
/*const App = () => {
  let vehiculos = [
    {id:0, medio:'Auto', foto:'https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg', nombre:'BMW'},
    {id:1, medio:'Motocicleta', foto:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg', nombre:'Ducati'},
    {id:2, medio:'Bus', foto:'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain', nombre:'Volvo'},
    {id:3, medio:'Motocicleta', foto:'https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg', nombre:'BMW'},
    {id:4, medio:'Auto', foto:'https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg', nombre:'Mazda'},
    {id:5, medio:'Auto', foto:'https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg', nombre:'Ferrari'},
    {id:6, medio:'Auto', foto:'https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg', nombre:'Volvo'}
  ];
  const [vehicles, setVehicles] = useState(vehiculos);

  return(
    <>
      <Header />
      <ul>
        {vehicles.map((vehiculo) => 
          <>
            <li key={vehiculo.id}>
              <p>Id: {vehiculo.id}</p>
            </li>
            <li key={vehiculo.medio}>
              <p>Medio: {vehiculo.medio}</p>
            </li>
            <li key={vehiculo.foto}>
              <img src={vehiculo.foto} alt={vehiculo.id} width="150px" />
            </li>
            <li key={vehiculo.nombre}>
              <p>Nombre: {vehiculo.nombre}</p>
            </li>
          </>
        )}
      </ul>
      <Footer />
    </>
  )
}*/

// Componente de clase - App
class App extends React.Component {
  
  constructor() {
    super();
     //estdo es para persistir informacion en la existncia de mi componente
     this.state = {
       vehicles: [
          {id:0, medio:'Auto', foto:'https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg', nombre:'BMW'},
          {id:1, medio:'Motocicleta', foto:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg', nombre:'Ducati'},
          {id:2, medio:'Bus', foto:'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain', nombre:'Volvo'},
          {id:3, medio:'Motocicleta', foto:'https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg', nombre:'BMW'},
          {id:4, medio:'Auto', foto:'https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg', nombre:'Mazda'},
          {id:5, medio:'Auto', foto:'https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg', nombre:'Ferrari'},
          {id:6, medio:'Auto', foto:'https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg', nombre:'Volvo'}
       ]
     }
  }

  render() {
    return(
      <>
        <Header />
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {this.state.vehicles.map((vehiculo) => 
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={vehiculo.foto}>
            <img className="font-bold text-xl mb-2" src={vehiculo.foto} alt={vehiculo.id} />
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{vehiculo.medio}</div>
              <p className="text-gray-700 text-base text-center">
                {vehiculo.nombre}
              </p>
            </div>
          </div>
        )}
        </div>
        <Footer />
      </>
    )
  }
}

const Header = () => {
  const title = 'Mi primera Aplicación';
  return(
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">{title}</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Bienvenida
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Comunicación Componentes
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Consumo API
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Footer = () => {
  return(
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Pepito Perez. Derechos reservados.
      </span>
    </footer>
  )
}

export default App;
