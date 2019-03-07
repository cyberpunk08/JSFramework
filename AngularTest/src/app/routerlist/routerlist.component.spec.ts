import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlistComponent } from './routerlist.component';

describe('RouterlistComponent', () => {
  let component: RouterlistComponent;
  let fixture: ComponentFixture<RouterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
