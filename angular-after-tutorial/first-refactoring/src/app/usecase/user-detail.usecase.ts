import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { UserApiService } from '../service/userapi.service';


@Injectable({
  providedIn: 'root'
})
export class UserDetailUsecase {
  constructor(private userApi: UserApiService, private store: Store){}

  get user$ () {
    return this.store.select(state => state.userDetail.user);
  }

  async fetchUser (userId: string) {
    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user: null
      }
    }));
    const user = await this.userApi.getUsersById(userId);

    this.store.update(state => ({
      ...state,
      userDetail: {
        ...state.userDetail,
        user
      }
    }));
  }
}
