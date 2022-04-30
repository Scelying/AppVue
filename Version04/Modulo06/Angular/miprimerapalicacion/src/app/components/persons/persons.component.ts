import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.sass']
})
export class PersonsComponent implements OnInit {
  personas!: any;

  //1-Este es el primer metodo que se ejecuta en el ciclo de vida de un componente
  constructor(private personService: PersonsService) {
    console.log('constructor');
  }

  //2-Se ejecuta cada vez que cambia un valor de un propiedad
  //Input Output
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  //3-Este metodo se ejecuta una sola vez cuando mi componente ya esta instanciado
  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      console.log(persons.data);
      this.personas = persons.data;
    });
    console.log('ngOnInit');
  }

  //4-Se llama cada vez que detecta cambio, inmediatamente despues del ngOnChnages y el ngOnInit
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  //5-El ultimo metodo que llama antes de destruir el componente
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
