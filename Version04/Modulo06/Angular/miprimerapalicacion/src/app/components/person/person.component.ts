import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
  idPerson!: string;
  person!: Person;

  constructor(private route: ActivatedRoute, private personService: PersonsService) {
    this.idPerson = route.snapshot.params['idPerson'];
   }

  ngOnInit(): void {
    this.personService.getPersonById(this.idPerson).subscribe(response => this.person = response);
  }

}
