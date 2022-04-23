import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  selectedOption: string = '';
  titulo = 'Componente Padre';

  arregloMedioTransporte = [ 'Auto', 'Bus', 'Motocicleta'];

  selectOption = (evento:any):void => {
    console.log(evento);
  }
}
