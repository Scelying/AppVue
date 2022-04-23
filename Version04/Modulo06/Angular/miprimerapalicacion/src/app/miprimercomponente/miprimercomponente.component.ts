import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrls: ['./miprimercomponente.component.sass']
})
export class MiprimercomponenteComponent {

  variable: string = 'Ejemplo';

  miPrimerFuncion = () => {
    console.log(this.variable);
  }

}
