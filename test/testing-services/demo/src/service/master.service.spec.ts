import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

//beforeEach()を使用しない場合、明示的にクラスを作成する
function setup() {
    const valueServiceSpy =  jasmine.createSpyObj('ValueService',['getValue']);
    const stubValue = 'stub value';
    const masterService = new MasterService(valueServiceSpy);

    valueServiceSpy.getValue.and.returnValue(stubValue);
    return {masterService, stubValue, valueServiceSpy};
    };

  it('#getValue should return stubbed value from a spy', ()=>
  {
    //この書き方のほうが、beforeEach()スタイルよりも、多くの人にとっては明快に感じるはず
　　const{ masterService, stubValue, valueServiceSpy} = setup();
     expect(masterService.getValue())
     .withContext('service returned stub value')
     .toBe(stubValue);
     expect(valueServiceSpy.getValue.calls.count())
     .withContext('spy method was called once')
     .toBe(1);

     expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
    .toBe(stubValue);
   });
