import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreaSantaComponent } from './popup-crea-santa.component';

describe('PopupCreaSantaComponent', () => {
  let component: PopupCreaSantaComponent;
  let fixture: ComponentFixture<PopupCreaSantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupCreaSantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCreaSantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
