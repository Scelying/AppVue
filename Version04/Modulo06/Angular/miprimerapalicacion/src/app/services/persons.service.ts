import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { Regres } from '../interfaces/reqres';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  regres!: Regres;
  person!: Person;
  endpoint: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Regres> {
      return this.http.get<Regres>(`${this.endpoint}/users`);
  }

  getPersonById(idPerson: string): Observable<Person> {
    return this.http.get<Person>(`${this.endpoint}/users/${idPerson}`)
  }
}
