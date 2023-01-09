import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
  it('should render application title as <h1>', async() => {
     /*テストアプリケーションのセットアップ
     　テストアプリケーションに組み込みたいコンポーネントを配列に追加
     　Promiseで結果が返されるため、awaiteで受けとる */
     await TestBed.configureTestingModule({
      declarations: [TitleComponent],
     }).compileComponents();


  //テスト用のコンポーネント作成
  const fixture = TestBed.createComponent(TitleComponent);
　//テスト用のユーティリティAPIがまとまっているため、それを利用
  const elemmnet = fixture.nativeElement as HTMLElement;
  //DOM のアサーション
  expect(elemmnet.querySelector('h1')?.textContent).toContain('My Application');
    });
});
