import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,firstValueFrom } from 'rxjs';
import { User } from '../user';

const apiHost = 'https://reqres.in/api';

interface Apiresponse<T>{
  data: T;
}

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  constructor (private http: HttpClient) {}

  getAllUsers () {
    return firstValueFrom(
      this.http.get<Apiresponse<User[]>>(`${ apiHost }/users`)
        .pipe(map(resp => resp.data))
    );
  }

  getUsersById(id: string){
    return firstValueFrom(
      this.http
        .get<Apiresponse<User>>(`${ apiHost }/users/${ id }`)
        .pipe(map(resp => resp.data))
    );
    }
}

