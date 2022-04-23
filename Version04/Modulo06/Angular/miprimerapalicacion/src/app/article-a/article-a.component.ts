import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-a',
  templateUrl: './article-a.component.html',
  styleUrls: ['./article-a.component.sass']
})
export class ArticleAComponent {

  @Input() contenido: string = '';
  titulo = 'Componente Hijo A'

}

