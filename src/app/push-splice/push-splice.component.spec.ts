import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSpliceComponent } from './push-splice.component';

describe('PushSpliceComponent', () => {
  let component: PushSpliceComponent;
  let fixture: ComponentFixture<PushSpliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushSpliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushSpliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
