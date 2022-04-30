import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  idPerson!: number;

  constructor(private route: ActivatedRoute, private personService: PersonsService) {
    this.idPerson = route.snapshot.params['idPerson'];
   }

  ngOnInit(): void {
  }

}
