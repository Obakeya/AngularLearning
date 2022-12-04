import { TestBed} from '@angular/core/testing';
import { ValueService } from './value.service';

  let service: ValueService;

  //describeを書かないと、コンポーネントのテスト部分でエラーが発生する
  describe('ValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ValueService]
    });
    service = TestBed.inject(ValueService);
  });


  it('should use ValueService', () => {
     expect(service.getValue()).toBe('real value');
  });
  });
