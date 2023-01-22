import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, map, distinctUntilChanged } from 'rxjs';
import { UserDetailUsecase } from '../../usecase/user-detail.usecase';

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit, OnDestroy {
  user$ = this.userDetailUsecase.user$;

  private onDestroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute, 
    private userDetailUsecase: UserDetailUsecase
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.onDestroy$),
        map(params => params['userId']),
        distinctUntilChanged()
      )
      .subscribe(userId => this.userDetailUsecase.fetchUser(userId));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
