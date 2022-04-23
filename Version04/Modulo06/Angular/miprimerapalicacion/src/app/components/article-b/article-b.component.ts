import { Component, EventEmitter, Output } from '@angular/core';
import { MedioTransporte } from 'src/app/interfaces/medio-transporte';

@Component({
  selector: 'app-article-b',
  templateUrl: './article-b.component.html',
  styleUrls: ['./article-b.component.sass']
})
export class ArticleBComponent {

  @Output() mensajeAComponentePadre = new EventEmitter<string>();
  titulo = 'Componente Hijo B'
  arregloMedioTransporte: MedioTransporte[] = [
    {id:0, nombre:'BMW'},
    {id:1, nombre:'Ducati'},
    {id:2, nombre:'Volvo'},
    {id:4, nombre:'Mazda'},
    {id:5, nombre:'Ferrari'}
  ];

  selectOption = (marca:string):void => {
    this.mensajeAComponentePadre.emit(marca);
  }
}
