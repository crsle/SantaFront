import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSantaComponent } from './crea-santa.component';

describe('CreaSantaComponent', () => {
  let component: CreaSantaComponent;
  let fixture: ComponentFixture<CreaSantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaSantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
