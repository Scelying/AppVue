import { Component } from '@angular/core';
import { MedioTransporte } from '../interfaces/medio-transporte';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  selectedOption!: MedioTransporte;
  titulo = 'Componente Padre';
  arregloMedioTransporte: MedioTransporte[] = [
    {id:0, medio:'Auto', foto:'https://i.pinimg.com/originals/5c/cc/e0/5ccce05a17ff931754faa9c30775793f.jpg', nombre:'BMW'},
    {id:1, medio:'Motocicleta', foto:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191025-DUCATI-STREETFIGHTER-V4-AA01.jpg', nombre:'Ducati'},
    {id:2, medio:'Bus', foto:'https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/1860x1050-9700-teaser-2018?qlt=82&wid=1440&ts=1630576292069&dpr=off&fit=constrain', nombre:'Volvo'},
    {id:3, medio:'Motocicleta', foto:'https://www.motofichas.com/images/phocagallery/BMW_Motorrad/g-310-gs-2021/01-bmw-g-310-gs-2022-estudio-triple-black.jpg', nombre:'BMW'},
    {id:4, medio:'Auto', foto:'https://i.pinimg.com/736x/a5/a3/ac/a5a3acf5c54bdf83d182b02aa0d68bcf.jpg', nombre:'Mazda'},
    {id:5, medio:'Auto', foto:'https://i.pinimg.com/originals/75/52/d1/7552d1673816375cb94e8022b6139ab6.jpg', nombre:'Ferrari'},
    {id:6, medio:'Auto', foto:'https://i.pinimg.com/originals/58/39/90/5839906af57e445e7ad7b5753fd6872a.jpg', nombre:'Volvo'}
  ];

  selectOption = (medioId:number):void => {
    let prueba = this.arregloMedioTransporte.filter(medio => medioId === medio.id)[0];
    this.selectedOption = prueba;
  }
}
