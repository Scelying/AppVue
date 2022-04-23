import { Component, Input } from '@angular/core';
import { MedioTransporte } from 'src/app/interfaces/medio-transporte';

@Component({
  selector: 'app-article-a',
  templateUrl: './article-a.component.html',
  styleUrls: ['./article-a.component.sass']
})
export class ArticleAComponent{

  @Input() contenido!: MedioTransporte;
  titulo = 'Componente Hijo A'

}

