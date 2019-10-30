import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveComponent } from './angular-reactive.component';

describe('AngularReactiveComponent', () => {
  let component: AngularReactiveComponent;
  let fixture: ComponentFixture<AngularReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
