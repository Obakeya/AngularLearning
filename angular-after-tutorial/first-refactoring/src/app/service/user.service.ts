import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (private http: HttpClient) {}

  getUsers (): Observable<User[]> {
    return this.http
      .get<{ data: User[]; }>("https://reqres.in/api/users")
      .pipe(
        map(resp => resp.data)
      );
  }
}
