import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

// Componente de clase - App
/*class App extends React.Component {
  
  constructor() {
    super();
     //estdo es para persistir informacion en la existencia de mi componente
     this.state = {
       vehicles: [
          {id:0, medio:'Auto', foto:'https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg', nombre:'BMW', cantidadInteresados: 0},
          {id:1, medio:'Motocicleta', foto:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg', nombre:'Ducati',cantidadInteresados: 0},
          {id:2, medio:'Bus', foto:'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain', nombre:'Volvo', cantidadInteresados: 0},
          {id:3, medio:'Motocicleta', foto:'https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg', nombre:'BMW', cantidadInteresados: 0},
          {id:4, medio:'Auto', foto:'https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg', nombre:'Mazda', cantidadInteresados: 0},
          {id:5, medio:'Auto', foto:'https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg', nombre:'Ferrari', cantidadInteresados: 0},
          {id:6, medio:'Auto', foto:'https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg', nombre:'Volvo', cantidadInteresados: 0}
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
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Cantidad Interesados</div>
                <p className="text-gray-700 text-base text-center">
                  {vehiculo.cantidadInteresados}
                </p>
                <div className="text-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Me Gusta
                  </button>
                </div>
            </div>
          </div>
        )}
        </div>
        <Footer />
      </>
    )
  }
}*/

/* componente funcional - App */
const App = () => {
  const vehiclesMock = [
    {id:0, medio:'Auto', foto:'https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg', nombre:'BMW', cantidadInteresados: 0},
    {id:1, medio:'Motocicleta', foto:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg', nombre:'Ducati',cantidadInteresados: 0},
    {id:2, medio:'Bus', foto:'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain', nombre:'Volvo', cantidadInteresados: 0},
    {id:3, medio:'Motocicleta', foto:'https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg', nombre:'BMW', cantidadInteresados: 0},
    {id:4, medio:'Auto', foto:'https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg', nombre:'Mazda', cantidadInteresados: 0},
    {id:5, medio:'Auto', foto:'https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg', nombre:'Ferrari', cantidadInteresados: 0},
    {id:6, medio:'Auto', foto:'https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg', nombre:'Volvo', cantidadInteresados: 0}
  ]

  const [vehicles, setVehicles] = useState(vehiclesMock);

  return(
    <>
      <Header />
      <Main vehicles={vehicles}/>
      <Footer />
    </>
  )
}

export default App;