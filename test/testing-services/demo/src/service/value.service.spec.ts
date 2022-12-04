import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ValueService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getvalue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('getObservableValue should return value from observalbe' ,
     (done: DoneFn) =>{
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
     });

     it('#getPromiseValue should return value from a promise',
     (done: DoneFn) => {
     service.getPromiseValue().then(value => {
       expect(value).toBe('promise value');
       done();
     });
   });
});
