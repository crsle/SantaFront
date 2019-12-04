import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupsouhaitComponent } from './popupsouhait.component';

describe('PopupsouhaitComponent', () => {
  let component: PopupsouhaitComponent;
  let fixture: ComponentFixture<PopupsouhaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupsouhaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsouhaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
