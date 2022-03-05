import { Observable } from 'rxjs';

const observable = new Observable(cualquierCosa => {
    cualquierCosa.next('Dato1');
    cualquierCosa.next(false);
    cualquierCosa.next(3);
})