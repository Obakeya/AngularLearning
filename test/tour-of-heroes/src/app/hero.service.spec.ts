import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';


describe('hero.service', () =>{
let httpClientSpy: jasmine.SpyObj<HttpClient>;
let heroService: HeroService;
let messageServiceSpy;


beforeEach(() => {
  // TODO: 他のメソッドも同様にSPYでテストする
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
  heroService = new HeroService(httpClientSpy,messageServiceSpy);
});

it('should return expected heroes (HttpClient called once)' ,
 (done: DoneFn) => {
  const expectedHeroes: Hero[] = [{id:1, name: 'A'}, {id:2 , name:'B'}];

  httpClientSpy.get.and.returnValue(of(expectedHeroes));

  heroService.getHeroes().subscribe({
    next: heroes => {
      expect(heroes)
      .withContext('expected heroes')
      .toEqual(expectedHeroes);
      done();
    },
    error: done.fail
  });

  expect(httpClientSpy.get.calls.count())
  .withContext('one call')
  .toBe(1);
 });

 it('should retrun an error when the server returns a 404',
 (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  let  errorResult = httpClientSpy.get.and.returnValue(of(errorResponse));

  heroService.getHeroes().subscribe({
    next: heroes => done.fail('expected an error, not heroes'), //failメソッドは明示的にテストを失敗させる
    error: error  => {
      expect(error.message).toContain('test 404 error');
      done();
    }
  });

});
});

