import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValueService {
  constructor() { }

  getValue(){
    return 'real value';
  }

    getObservableValue(): Observable<string> {
      const value =of('observable value');
    return  value;
  }

   getPromiseValue(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise value');
      }, 1000);
    });
  }
}
