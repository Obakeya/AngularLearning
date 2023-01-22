import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map ,firstValueFrom, filter } from 'rxjs';
import { User } from '../user';
import { Store } from '../service/store.service';


@Injectable({
  providedIn: 'root'
})
export class UserListUsecase {

  get users$ () {
    return this.store.
      // state.userListに経校があったときだけ後続のpipeが実行される
      select(state => state.userList)
      .pipe(
        map(({ items, filter }) =>
          items.filter(user =>
            (user.first_name + user.last_name).includes(filter.nameFilter)
          )
        )
      );
  }

  get filter$ () {
    return this.store.select(state => state.userList.filter);
  }

  constructor (private http: HttpClient,private store: Store) {}


  async fetchUsers () {
    const users = await firstValueFrom(
    this.http
      .get<{ data: User[] }>("https://reqres.in/api/users")
      .pipe(map(resp => resp.data))
    );

    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        items: users
      }
    }));
  }

  setNameFilter (nameFilter: string) {
    this.store.update(state => ({
      ...state,
      userList: {
        ...state.userList,
        filter: {
          nameFilter
        }
      }
    }))
  }





}
