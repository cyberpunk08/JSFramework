import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterdetailComponent } from './routerdetail.component';

describe('RouterdetailComponent', () => {
  let component: RouterdetailComponent;
  let fixture: ComponentFixture<RouterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
