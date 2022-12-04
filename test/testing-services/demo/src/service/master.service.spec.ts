import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';


describe('MasterService without Anuglar tesing support', () => {
  let masterService: MasterService;
  let check;

it('#getValue should return real value from the real service', ()=>
{
  masterService = new MasterService(new ValueService());
  expect(masterService.getValue()).toBe('real value');
});

it('#getValue should return stubbed value from a spy', ()=>
{
   // ValueServiceを表すオブジェクトに対して get value スパイを作成する
   const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

   //get value　スパイが呼ばれたときに、値をセットする
   const stubValue = 'stub value';
   valueServiceSpy.getValue.and.returnValue(stubValue);

   masterService = new MasterService(valueServiceSpy);

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
