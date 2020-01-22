import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepInTouchComponent } from './keep-in-touch.component';

describe('KeepInTouchComponent', () => {
  let component: KeepInTouchComponent;
  let fixture: ComponentFixture<KeepInTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepInTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
