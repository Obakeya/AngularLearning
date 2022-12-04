import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

let masterService: MasterService;
let valueServiceSpy: jasmine.SpyObj<ValueService>;

describe('MasterService', () => {
  beforeEach(()=>
  {
    const spy = jasmine.createSpyObj('ValueService',['getValue']);

    TestBed.configureTestingModule({
      //テスト用サービスとスパイオブジェクトを両方準備する
      providers: [
        MasterService,
        { provide: ValueService, useValue: spy }
      ]
    });
  //サービスとスパイオブジェクトを注入する
  masterService = TestBed.inject(MasterService);
  valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;});

  it('#getValue should return stubbed value from a spy', ()=>
  {

     //get value　スパイが呼ばれたときに、値をセットする
     const stubValue = 'stub value';
     valueServiceSpy.getValue.and.returnValue(stubValue);

     expect(masterService.getValue())
     .withContext('service returned stub value')
     .toBe(stubValue);
     expect(valueServiceSpy.getValue.calls.count())
     .withContext('spy method was called once')
     .toBe(1);

     expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
    .toBe(stubValue);
   });

});
