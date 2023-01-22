import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListItemComponent } from './view/user-list-item/user-list-item.component';
import { UserListComponent } from './view/user-list/user-list.component';
import { UserListFilterComponent } from './view/user-list-filter/user-list-filter.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, UserListItemComponent, UserListComponent ,UserListFilterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
