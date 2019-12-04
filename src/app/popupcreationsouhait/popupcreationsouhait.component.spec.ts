import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcreationsouhaitComponent } from './popupcreationsouhait.component';

describe('PopupcreationsouhaitComponent', () => {
  let component: PopupcreationsouhaitComponent;
  let fixture: ComponentFixture<PopupcreationsouhaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupcreationsouhaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcreationsouhaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
