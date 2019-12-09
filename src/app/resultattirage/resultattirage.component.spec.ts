import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultattirageComponent } from './resultattirage.component';

describe('ResultattirageComponent', () => {
  let component: ResultattirageComponent;
  let fixture: ComponentFixture<ResultattirageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultattirageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultattirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
