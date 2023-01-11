import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserService } from './service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  users: User[] = [];

  constructor (private userService: UserService) {}

  ngOnInit () {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
