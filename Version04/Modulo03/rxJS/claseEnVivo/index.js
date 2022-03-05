/*of({ nombre: 'Gustavo' }).subscribe({
  next: (v) => console.log('valor: ', v),
  error: (e) => console.error('error', e),
  complete: () => console.log('completo')
});*/

/*from([3,2,1,0]).subscribe({
   next: (v) => console.log('valor: ', v),
   error: (e) => console.error('error', e),
   complete: () => console.log('completo')
})*/

//Promesas
/*from(Promise.resolve(10)).subscribe({
  next: (v) => console.log('valor: ', v),
  error: (e) => console.error('error', e),
  complete: () => console.log('completo'),
});

from(Promise.reject('Fallo')).subscribe({
  next: (v) => console.log('valor: ', v),
  error: (e) => console.error('error', e),
  complete: () => console.log('completo'),
});*/

/*from([Promise.resolve(10), Promise.reject('Fallo')]).subscribe({
  next: (v) => console.log('valor: ', v),
  error: (e) => console.error('error', e),
  complete: () => console.log('completo'),
});*/

/*const ejemplo$ = new Observable((subcriber) => {
  console.log('Hola');
  subcriber.next('Mundo');
  subcriber.next('Estamos');
  subcriber.next('En');
  setTimeout(() => {
    subcriber.next('Colombia');
  }, 5000);
});

ejemplo$.subscribe((respuesta) => {
  console.log(respuesta);
});

ejemplo$.subscribe((respuesta) => {
  console.log(respuesta);
});*/

//Crear Observables
/*const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi');
  }, 1000);
});

const subscripcion = observable.subscribe((x) => console.log(x));
subscripcion.unsubscribe();*/
/*of(1, 2, 3)
  .pipe(last())
  .subscribe((v) => console.log('valor: ', v));*/
/*import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const obs$ = ajax.getJSON(`https://api.github.cm/users?per_page=5`).pipe(
  map((userResponse) => console.log('users: ', userResponse)),
  catchError((error) => {
    console.log('error: ', error);
    return of(error);
  })
);

obs$.subscribe(
  (v) => console.log(v),
  (e) => console.error(e)
);*/
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(2000);

/*numbers.subscribe(
  (x) => console.log('Next: ', x),
  (error) => console.error(error)
);*/

const takeFourNumbers = numbers.pipe(take(10));

takeFourNumbers.subscribe(
  (x) => console.log('Next: ', x),
  (error) => console.error(error)
);