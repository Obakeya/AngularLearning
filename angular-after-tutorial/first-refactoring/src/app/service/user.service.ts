import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor (private http: HttpClient) {}

  get users$ () {
    return this.usersSubject.asObservable();
  }

  fetchUsers(): void {
    this.http
      .get<{ data: User[] }>("https://reqres.in/api/users")
      .pipe(map(resp => resp.data))
      .subscribe(users => {
        this.usersSubject.next(users);
      });
  }
}
